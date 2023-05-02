import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/Service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:MoviesService) {}
  movieData:any;
  ngOnInit():void{
    this.movieData=this.service.movieDetails;
  }

}
