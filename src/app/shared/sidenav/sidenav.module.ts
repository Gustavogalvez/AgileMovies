import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SideContentComponent } from './side-content/side-content.component';
import { SidenavComponent } from './sidenav.component';




const materialModules = [
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatButtonModule,
  MatIconModule
];


/*
  Modulo de sidenav recursivo exportado de proyecto pasado
*/
@NgModule({
  declarations: [SidenavComponent, SideContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
