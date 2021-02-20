import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InViewportModule } from 'ng-in-viewport';
import { RepartoComponent } from './reparto.component';


@NgModule({
  declarations: [RepartoComponent],
  imports: [
    CommonModule,
    InViewportModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [RepartoComponent]
})
export class RepartoModule { }
