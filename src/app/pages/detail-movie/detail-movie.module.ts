import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RepartoModule } from 'src/app/components/reparto/reparto.module';
import { DetailMovieRoutingModule } from './detail-movie-routing.module';
import { DetailMovieComponent } from './detail-movie.component';



@NgModule({
  declarations: [DetailMovieComponent],
  imports: [
    CommonModule,
    DetailMovieRoutingModule,
    RepartoModule
  ]
})
export class DetailMovieModule { }
