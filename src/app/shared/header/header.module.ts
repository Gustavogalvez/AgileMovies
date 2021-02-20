import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatProgressBarModule
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
