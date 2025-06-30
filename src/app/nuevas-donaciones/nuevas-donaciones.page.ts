import { Component } from '@angular/core';
import { SqliteService } from '../services/sqlite.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-nuevas-donaciones',
  templateUrl: './nuevas-donaciones.page.html',
  styleUrls: ['./nuevas-donaciones.page.scss'],
  standalone: false
})
export class NuevasDonacionesPage {
  planta = {
    nombrecomun: '',
    nombrecientifico: '',
    tipo: '',
    caracteristicas: '',
    uso: '',
    foto: ''
  };

  donacionesGuardadas: any[] = [];

  constructor(
    private sqliteService: SqliteService,
    private sessionService: SessionService
  ) {}

  // Se ejecuta cada vez que se entra a la página
  ionViewWillEnter() {
    this.cargarDonacionesGuardadas();
  }

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 70,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      this.planta.foto = image.webPath || '';
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  async guardarDonacion() {
    const usuario = this.sessionService.getUsername();
    if (!usuario) {
      console.error('No hay usuario logueado.');
      return;
    }

    try {
      await this.sqliteService.guardarDonacion(this.planta, usuario);
      console.log('Donación guardada exitosamente.');
      this.resetFormulario();
      await this.cargarDonacionesGuardadas(); // actualizar la lista
    } catch (error) {
      console.error('Error al guardar la donación:', error);
    }
  }

  async cargarDonacionesGuardadas() {
    const usuario = this.sessionService.getUsername();
    if (!usuario) return;

    try {
      this.donacionesGuardadas = await this.sqliteService.obtenerDonaciones(usuario);
    } catch (error) {
      console.error('Error al obtener donaciones guardadas:', error);
    }
  }

  resetFormulario() {
    this.planta = {
      nombrecomun: '',
      nombrecientifico: '',
      tipo: '',
      caracteristicas: '',
      uso: '',
      foto: ''
    };
  }
}
