import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'aportes-detallados',
    loadChildren: () => import('./aportes-detallados/aportes-detallados.module').then(m => m.AportesDetalladosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'api-demo',
    loadChildren: () => import('./api-demo/api-demo.module').then( m => m.ApiDemoPageModule)
  },
  {
    path: 'nuevas-donaciones',
    loadChildren: () => import('./nuevas-donaciones/nuevas-donaciones.module').then( m => m.NuevasDonacionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
