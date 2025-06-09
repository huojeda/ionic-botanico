import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { userData } from '../datos';


@Component({
  selector: 'app-aportes-detallados',
  templateUrl: './aportes-detallados.page.html',
  styleUrls: ['./aportes-detallados.page.scss'],
  standalone: false,
})
export class AportesDetalladosPage  {
  plantasDelUsuario: any[] = [];

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {}

  ionViewWillEnter() {
    // 🔐 Si no está logueado, lo redirigimos
    if (!this.sessionService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    // 👤 Obtenemos el nombre del usuario logueado
    const username = this.sessionService.getUsername();

    // 🔍 Buscamos el usuario en la lista
    const usuario = userData.users.find(u => u.user === username);

    if (usuario) {
      //  Filtramos las plantas asociadas a ese usuario
      this.plantasDelUsuario = userData.plantas.filter(m =>
        usuario.plantas.includes(m.id)
      );
    }
  }

  volverAlHome() {
    this.router.navigate(['/home']);
  }
}

