import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.container.nativeElement.scrollIntoView({
        behavior: 'auto', block: 'start'
      })
    }, 0);

    if (!this.moviesService.popularMovies) {
      this.moviesService.getAllData().subscribe();
    }
  }

}
