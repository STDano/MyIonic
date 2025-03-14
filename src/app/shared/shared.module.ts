import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCompComponent } from '../header-comp/header-comp.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HeaderCompComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderCompComponent
  ]
})
export class SharedModule { }
