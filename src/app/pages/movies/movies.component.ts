import { Component, OnInit } from '@angular/core';
import { TheatresService } from 'src/app/Service/theatres.service';
import { CombineService } from 'src/app/combine.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent{
  MovieData : any;
  TheaterData : any;
  temp : any;
  index: number = 0;
  
  
  
  
  constructor(private getData:CombineService){

    getData.getMovie().subscribe(mov=>{
    
      
      this.MovieData = mov
      console.log(this.MovieData)
    })
    
    getData.getTheater().subscribe(x=>{
      console.log(x)
      this.TheaterData = x
    })
    
    
  }

  

  public imageList: Array<any> = [
    {"id" : 1, "Url" :"../../../assets/Tenet.jpg"}, 
    {"id" : 2, "Url" :"../../../assets/Fight club.jpg"}, 
    {"id" : 3, "Url" :"../../../assets/pathan-2.webp"}, 
    {"id" : 4, "Url" :"../../../assets/thedarkknight'.jpg"},
    {"id" : 5, "Url" :"../../../assets/demonslayer.jpg"},
    {"id" : 6, "Url" :"../../../assets/thedarkknight'.jpg"}, 
  ];

  
  // movieData:any;
  // ngOnInit(): void {
  //   this.movieData=this.getData.MovieDetails;
    
  // }
  

}
