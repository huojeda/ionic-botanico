import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { LoginFormComponent } from '../components/login-form/login-form.component'; // Asegúrate que la ruta es correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  @ViewChild(LoginFormComponent) loginFormComponent!: LoginFormComponent;

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {}

  ionViewWillEnter() {
    // Limpiamos el formulario de login cada vez que se entra a la vista
    if (this.loginFormComponent) {
      this.loginFormComponent.resetFormulario();
    }
  }

  // Este método recibe el nombre del usuario desde el componente hijo
  procesarLogin(username: string) {
    this.sessionService.setLoggedIn(true);
    this.sessionService.setUsername(username);
    this.router.navigate(['/home']); // Redirige al home tras el login
  }
}
