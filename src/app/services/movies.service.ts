import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Movie } from '../models/movie.model';
import { User } from '../models/user.model';
import { ApiUrl } from './api-url';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  URL = new ApiUrl().URL;

  constructor(private http: HttpClient) { }


  users() {
    return this.http.get<{data: User}>(this.URL + '/user/me');
  }
  popularMovies() {
    return this.http.get<{data: Array<Movie>, imageBaseUrl: string}>(this.URL + '/movies/popular');
  }
  premiereMovies() {
    return this.http.get<{data: Array<Movie>, imageBaseUrl: string}>(this.URL + '/movies/now_playing');
  }

  getAllData() {
    return forkJoin([
      this.users(),
      this.popularMovies(),
      this.premiereMovies()
    ]);
  }
}
