import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    HeaderModule
  ]
})
export class SharedModule { }
