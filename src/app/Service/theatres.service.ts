import { Injectable } from '@angular/core';
import { CombineService } from '../combine.service';

@Injectable({
  providedIn: 'root'
})
export class TheatresService {

  constructor() { }
  MovieDetails=[
    {
      id:101,
      movieName:"Tenet",
      directorName:"Director - Christopher Nolan",
      ticketPrice:"150",
      theatreName:"Theatre - Inox cinemas",
      location:"Location - Bangalore",
      movieImg:"../../../assets/Tenet.jpg"

    },
    {
      id:102,
      movieName:"Pathan",
      directorName:"Director -  Siddarth",
      ticketPrice:"170",
      theatreName:"Theatre - Miraj cinemas",
      location:"Location - Mumbai",
      movieImg:"../../../assets/pathan-2.webp"

    },
    {
      id:103,
      movieName:"Fight club",
      directorName:"Director - David Fincher",
      ticketPrice:"120",
      theatreName:"Theatre - Pvr cinemas",
      location:"Location - Chennai",
      movieImg:"../../../assets/Fight club.jpg"

    },
    {
      id:104,
      movieName:"The Dark knight",
      directorName:"Director - Christopher Nolan",
      ticketPrice:"220",
      theatreName:"Theatre - Pvr cinemas",
      location:"Location - Bangalore",
      movieImg:"../../../assets/thedarkknight'.jpg"
    },
    {
      id:105,
      movieName:"Demon slayer",
      directorName:"Director - Haruo Sotozaki",
      ticketPrice:"180",
      theatreName:"Theatre - Jazz Cinemas",
      location:"Location - Bangalore",
      movieImg:"../../../assets/demonslayer.jpg"
    }

  ]
}
