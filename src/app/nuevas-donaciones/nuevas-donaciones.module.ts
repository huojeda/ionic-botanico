import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevasDonacionesPageRoutingModule } from './nuevas-donaciones-routing.module';

import { NuevasDonacionesPage } from './nuevas-donaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevasDonacionesPageRoutingModule
  ],
  declarations: [NuevasDonacionesPage]
})
export class NuevasDonacionesPageModule {}
