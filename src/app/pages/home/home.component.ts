import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getAllData().subscribe(resp => {
      console.log(resp);
    });
  }

}
