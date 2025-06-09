import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: false,
})
export class ContactoPage {
  contacto = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  enviar() {
    // Aquí podrías manejar el envío más adelante.
    console.log("Formulario válido. Datos:", this.contacto);
  }
  
  constructor(private router: Router) {}
  volverAlHome() {
    this.router.navigate(['/home']);
  }
}
