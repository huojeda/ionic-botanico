import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AportesDetalladosPage } from './aportes-detallados.page';

const routes: Routes = [
  {
    path: '',
    component: AportesDetalladosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AportesDetalladosPageRoutingModule {}
