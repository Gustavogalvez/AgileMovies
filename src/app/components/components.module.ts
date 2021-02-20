import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopularMoviesModule } from './popular-movies/popular-movies.module';
import { PremiereMoviesModule } from './premiere-movies/premiere-movies.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    PremiereMoviesModule,
    PopularMoviesModule
  ]
})
export class ComponentsModule { }
