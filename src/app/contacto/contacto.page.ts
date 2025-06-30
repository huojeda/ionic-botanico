import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: false,
})
export class ContactoPage implements OnInit {
  contacto = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  contactosGuardados: any[] = [];

  constructor(private router: Router, private storageService: StorageService) {}

  async ngOnInit() {
    await this.cargarContactos();
  }

  async enviar() {
    const nuevoContacto = { ...this.contacto };

    // Agrega el contacto a la lista
    this.contactosGuardados.push(nuevoContacto);

    // Guarda la lista completa en almacenamiento local
    await this.storageService.set('contactos', this.contactosGuardados);

    // Limpia el formulario
    this.contacto = {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    };

    console.log('Contacto guardado:', nuevoContacto);
  }

  async cargarContactos() {
    const datos = await this.storageService.get('contactos');
    this.contactosGuardados = datos || [];
  }

  async borrarContactos() {
    await this.storageService.remove('contactos');
    this.contactosGuardados = [];
  }

  volverAlHome() {
    this.router.navigate(['/home']);
  }
}
