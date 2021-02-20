import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InViewportModule } from 'ng-in-viewport';
import { PopularMoviesComponent } from './popular-movies.component';



@NgModule({
  declarations: [PopularMoviesComponent],
  imports: [
    CommonModule,
    InViewportModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [PopularMoviesComponent]
})
export class PopularMoviesModule { }
