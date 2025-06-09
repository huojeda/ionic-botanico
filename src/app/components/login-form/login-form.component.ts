import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { userData } from '../../datos';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  standalone: false
})
export class LoginFormComponent implements OnInit {
  datos = {
    user: "user",
    pwd: ""
  }

  @Output() loginExitoso = new EventEmitter<string>();


  constructor() { }

  showErr(errMsg: String) {
    const errorElem: HTMLElement | null = document.getElementById('errCont');
    if (errorElem != null) {
      const msgElem = document.createTextNode(errMsg.toString());
      const itemElem = document.createElement("li");
      itemElem.appendChild(msgElem);
      errorElem.appendChild(itemElem);
    }
  }

  clearErrs() {
    const errorElem: HTMLElement | null = document.getElementById('errCont');
    if (errorElem != null)
      errorElem.innerHTML = '';
  }

  validateInputs = () => {
    const nombreInput: HTMLInputElement = <HTMLInputElement>document.getElementById('nombreUsuario');
    const passwordInput: HTMLInputElement = <HTMLInputElement>document.getElementById('password');
    let valid = true;

    if (nombreInput?.value === '') {
      this.showErr("Debe ingresar un nombre de usuario");
      valid = false;
    }

    if (passwordInput?.value.length < 4) {
      this.showErr("La contraseña debe tener al menos 4 caracteres.");
      valid = false;
    }

    if (valid) {
      let usuarioExiste = false;

      for (let i in userData.users) {
        if (userData.users[i].user === nombreInput?.value && userData.users[i].pass === passwordInput?.value)
          usuarioExiste = true;
      }

      if (!usuarioExiste) {
        this.showErr("No se encuentra un usuario con dicha contraseña.");
        valid = false;
      }
    }

    return valid;
  };

  ngOnInit() {}

  iniciar() {
    this.clearErrs();

    if (!this.validateInputs())
      return;

    // ✅ Emitimos evento en vez de navegar directamente
    const nombreUsuario = (<HTMLInputElement>document.getElementById('nombreUsuario')).value;
    this.loginExitoso.emit(nombreUsuario);
  }

  resetFormulario() {
  this.datos.user = '';
  this.datos.pwd = '';
  this.clearErrs(); // limpia errores también si querés
  }

}
