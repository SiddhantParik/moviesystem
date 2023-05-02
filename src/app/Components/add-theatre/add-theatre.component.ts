import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-theatre',
  templateUrl: './add-theatre.component.html',
  styleUrls: ['./add-theatre.component.css']
})
export class AddTheatreComponent {
  TheatreArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  thtname: string = "";
  location: string = "";
  theatreId = "";

  constructor(private http: HttpClient) {
    this.getAllTheatre();
  }

  ngOnInit(): void {
  }

  getAllTheatre() {
    this.http.get("https://localhost:7048/api/Theatres").subscribe((resultData: any) => {
      this.isResultLoaded = true;
      console.log(resultData);
      this.TheatreArray = resultData;
    });
  }

  register() {
    let bodyData = {
      "name": this.thtname,
      "location": this.location,
    };

    this.http.post("https://localhost:7048/api/Theatres", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Theatre Registered Successfully")
      this.getAllTheatre();
    });
  }

  setUpdate(data: any) {
    this.thtname = data.name;
    this.location = data.location;
    this.theatreId = data.id;
  }

  updateRecords() {
    let bodyData = {
      "name": this.thtname,
      "location": this.location,
    };

    this.http.put("https://localhost:7048/api/Theatres/" + this.theatreId, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Theatre Register Updated")
      this.getAllTheatre();
    });
  }

  save() {
    if (this.theatreId == '') {
      this.register();
    } else {
      this.updateRecords();
    }
  }

  setDelete(data: any) {
    this.http.delete("https://localhost:7048/api/Theatres/" + data.id).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Theatre Register Deleted")
      this.getAllTheatre();
    });
  }



}