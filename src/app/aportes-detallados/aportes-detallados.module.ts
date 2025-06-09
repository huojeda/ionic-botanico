import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AportesDetalladosPageRoutingModule } from './aportes-detallados-routing.module';

import { AportesDetalladosPage } from './aportes-detallados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AportesDetalladosPageRoutingModule
  ],
  declarations: [AportesDetalladosPage]
})
export class AportesDetalladosPageModule {}
