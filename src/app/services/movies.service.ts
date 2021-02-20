import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { User } from '../models/user.model';
import { ApiUrl } from './api-url';
import { DataSharedService } from './data-shared.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  URL = new ApiUrl().URL;

  popularMovies!: Movie[];
  popularPage: number = 1;

  premiereMovies!: Movie[];
  premierePage: number = 1;

  constructor(private http: HttpClient, private dataShared: DataSharedService) { }

  users() {
    return this.http.get<{data: User}>(this.URL + '/user/me');
  }
  getPopularMovies() {
    return this.http.get<{data: Array<Movie>, imageBaseUrl: string}>(this.URL + '/movies/popular?page=' + this.popularPage)
    .pipe(
      map(data => data.data.map(movie => Object.assign(movie, {url: (data.imageBaseUrl + movie.backdrop_path)})))
    );
  }
  getPremiereMovies() {
    return this.http.get<{data: Array<Movie>, imageBaseUrl: string}>(this.URL + '/movies/now_playing?page=' + this.premierePage)
    .pipe(
      map(data => data.data.map(movie => Object.assign(movie, {url: (data.imageBaseUrl + movie.backdrop_path)})))
    );
  }

  getAllData() {
    return forkJoin([
      this.users(),
      this.getPopularMovies(),
      this.getPremiereMovies()
    ]).pipe(
      map(data => {
        this.popularPage = 1;
        if (!this.dataShared.user) {
          this.dataShared.user = data[0].data;
        } else {
          Object.assign(this.dataShared.user, data[0].data);
        }

        this.popularMovies = data[1];
        this.premiereMovies = data[2];
        console.log(this.popularMovies, this.premiereMovies, this.dataShared.user);
      })
    );
  }
}
