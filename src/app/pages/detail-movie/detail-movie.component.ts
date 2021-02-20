import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/models/actor.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  actors!: Actor[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({movieId}) => {
      if (this.movieService.movieDetail) {
        this.movieService.getMovieById(movieId).subscribe(actors => {
          this.actors = actors;
        });
      } else {
        // si no poseo el detalle de la película, y ya que no lo puedo obtener desde la api, lo redirecciono al home
        this.router.navigate(['/home']);
      }
    });
  }

}
