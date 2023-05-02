import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(){}

  movieDetails= [
    {
      id:1,
      movieName:"Salaar",
      directorName:"Prasanth Neel",
      releaseDate: "28-Sep-2023",
      movieImg:"../../../assets/salar3.jpg"
    },
    {
      id:2,
      movieName:"Jawan",
      directorName:"Atlee",
      releaseDate:"02-Jun-2023",
      movieImg:"../../../assets/jawan2.jpg"
    },
    {
      id:3,
      movieName:"Leo",
      directorName:"Lokesh",
      releaseDate:"30-Oct-2023",
      movieImg:"../../../assets/Leo.jpg"


    },
    {
      id:4,
      movieName:"PS-2",
      directorName:"Maniratnam",
      releaseDate:"28-Apr-2023",
      movieImg:"../../../assets/PS-2.jpg"
    },
    {
      id:5,
      movieName:"Dune-2",
      directorName:"Denis Villeneuve",
      releaseDate:"03-Nov-2023",
      movieImg:"../../../assets/dune-2.webp"
    }
  ]
 
  }
