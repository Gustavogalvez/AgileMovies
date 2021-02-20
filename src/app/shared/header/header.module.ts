import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeaderComponent } from './header.component';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatProgressBarModule,
  MatTooltipModule
]

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ...material
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
