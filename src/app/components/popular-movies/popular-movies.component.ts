import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  infiniteScroll = false;

  constructor(
    public moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.infiniteScroll = true;
    }, 500);
  }

  onIntersection({ visible }: { visible: boolean }): void {
    if (this.infiniteScroll && visible) {
      this.infiniteScroll = false;
      this.moviesService.popularPage = this.moviesService.popularPage + 1;
      this.moviesService.getPopularMovies().subscribe(data => {
        this.infiniteScroll = true;
        this.moviesService.popularMovies = this.moviesService.popularMovies.concat(data);
      }, () => this.infiniteScroll = true);
    }
  }

}
