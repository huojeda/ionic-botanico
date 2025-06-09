import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
  standalone: false,
})
export class UbicacionPage {
  constructor(private router: Router) {}

  volverAlHome() {
    this.router.navigate(['/home']);
  }
}
