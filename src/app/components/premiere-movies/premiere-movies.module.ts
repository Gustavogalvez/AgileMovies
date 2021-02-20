import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PremiereMoviesComponent } from './premiere-movies.component';



@NgModule({
  declarations: [PremiereMoviesComponent],
  imports: [
    CommonModule
  ],
  exports: [PremiereMoviesComponent]
})
export class PremiereMoviesModule { }
