import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  MovieArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  movname: string = "";
  directorname: string = "";
  movieId = "";
  poster:string = "";
  price = "";
  
  constructor(private http: HttpClient) {
    this.getAllMovie();
  }

  ngOnInit(): void {
  }

  getAllMovie() {
    this.http.get("https://localhost:7048/api/Movies").subscribe((resultData: any) => {
      this.isResultLoaded = true;
      console.log(resultData);
      this.MovieArray = resultData;
    });
  }

  register() {
    let bodyData = {
      "name": this.movname,
      "directorName": this.directorname,
      "poster" : this.poster,
      "price": this.price
    };

    this.http.post("https://localhost:7048/api/Movies", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Movie Registered Successfully")
      this.getAllMovie();
    });
  }

  setUpdate(data: any) {
    this.movname = data.name;
    this.directorname = data.directorName;
    this.movieId = data.id;
  }

  updateRecords() {
    let bodyData = {
      "name": this.movname,
      "directorName": this.directorname,
    };

    this.http.put("https://localhost:7048/api/Movies/" + this.movieId, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Movie Registered Updated")
      this.getAllMovie();
    });
  }

  save() {
    if (this.movieId == '') {
      this.register();
    } else {
      this.updateRecords();
    }
  }

  setDelete(data: any) {
    this.http.delete("https://localhost:7048/api/Movies/" + data.id).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Movie Deleted")
      this.getAllMovie();
    });
  }
}