import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { userData } from '../datos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage {
  usuarioActual: any = null;

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {}

  ionViewWillEnter() {
    // 🔐 Redirigir si no está logueado
    if (!this.sessionService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    // 👤 Obtener datos del usuario actual
    const username = this.sessionService.getUsername();
    const usuario = userData.users.find(u => u.user === username);

    if (usuario) {
      this.usuarioActual = usuario;
    }
  }

  volverAlHome() {
    this.router.navigate(['/home']);
  }

  cerrarSesion() {
    this.sessionService.setLoggedIn(false);
    this.sessionService.setUsername(null);  // Asegúrate que el método acepta `null`
    this.router.navigate(['/login']);
  }
}

