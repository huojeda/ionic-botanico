import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiDemoPageRoutingModule } from './api-demo-routing.module';

import { ApiDemoPage } from './api-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiDemoPageRoutingModule
  ],
  declarations: [ApiDemoPage]
})
export class ApiDemoPageModule {}
