import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { SidenavModule } from './sidenav/sidenav.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    SidenavModule
  ],
  exports: [
    HeaderModule,
    SidenavModule
  ]
})
export class SharedModule { }
