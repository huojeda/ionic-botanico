import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SessionService } from './session.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private sessionService: SessionService,
    private navCtrl: NavController
  ) {}

  async navegar(ruta: string) {
    await this.menuCtrl.close();
    this.navCtrl.navigateForward(ruta);
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  cerrarSesion() {
    this.menuCtrl.close();
    this.sessionService.setLoggedIn(false);
    this.sessionService.setUsername(null);
    this.navCtrl.navigateRoot('/login'); // Redirige al login
  }
}
