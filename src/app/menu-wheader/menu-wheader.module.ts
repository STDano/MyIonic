import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuWheaderPageRoutingModule } from './menu-wheader-routing.module';

import { MenuWheaderPage } from './menu-wheader.page';

import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuWheaderPageRoutingModule,
    SharedModule
  ],
  declarations: [MenuWheaderPage]
})
export class MenuWheaderPageModule {}
