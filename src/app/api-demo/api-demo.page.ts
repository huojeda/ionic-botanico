import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Geolocation } from '@capacitor/geolocation'; 
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-api-demo',
  templateUrl: './api-demo.page.html',
  styleUrls: ['./api-demo.page.scss'],
  standalone: false
})
export class ApiDemoPage implements OnInit {
  posts: any[] = [];
  categories: any[] = [];

  imagen: string | null = null;
  ubicacion: string = ''; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe(data => {
      this.posts = data.slice(0, 5); // Solo los primeros 5
    });

    this.apiService.getMealCategories().subscribe(data => {
      this.categories = data.categories;
    });
  }

  // Función para obtener ubicación
  async obtenerUbicacion() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.ubicacion = `Lat: ${coordinates.coords.latitude}, Lng: ${coordinates.coords.longitude}`;
      console.log('Ubicación:', this.ubicacion);
    } catch (error) {
      console.error('Error al obtener ubicación:', error);
      this.ubicacion = 'No se pudo obtener la ubicación';
    }
  }

  // Función para obtener foto
  async tomarFoto() {
  try {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera // Cambiar a .Prompt o .Photos si querés dar opción
    });

    this.imagen = photo.dataUrl!;
    console.log('Foto tomada');
  } catch (error) {
    console.error('Error al tomar foto:', error);
  }
}
}
