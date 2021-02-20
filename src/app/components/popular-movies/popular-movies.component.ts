import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  infiniteScroll = false;

  constructor(
    public moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.infiniteScroll = true;
  }

  onIntersection({ visible }: { visible: boolean }): void {
    if (this.infiniteScroll && visible) {

      this.infiniteScroll = false;
      this.moviesService.popularPage = this.moviesService.popularPage + 1;

      this.moviesService.getPopularMovies().subscribe(data => {

        this.moviesService.popularMovies = this.moviesService.popularMovies.concat(data);

        this.infiniteScroll = true;
      }, () => this.infiniteScroll = true);

    }
  }

}
