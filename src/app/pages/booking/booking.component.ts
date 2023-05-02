import { Component, OnInit, getNgModuleById } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CombineService } from 'src/app/combine.service';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent {


  form: any;
  users: any[] = [];
  theater: any;
  movie: any;
  userID: number = 0;
  data :any[] = [];
  minDate:any;


  addForm = {
    name: '',
    email: '',
    phone: '',
    movieId: '',
    theatreId: '',
    location: '',
    bookingDate: '',
    numberOfSeats: ''
  }
  constructor(private route: ActivatedRoute, private combine: CombineService) {
    this.subscribeUser();
    this.subscribeTheater();
    this.subscribeMovie();
    this.subscribeBookings();
    this.getDate();


  }


  subscribeUser() {
    this.combine.getUser().subscribe((u) => {
      this.users = [u]
    })
  }




  subscribeTheater() {
    this.combine.getTheater().subscribe((t) => {
      this.theater = t
    })
  }

  subscribeMovie() {
    this.combine.getMovie().subscribe((m) => {
      this.movie = m
    });
  }


  // getData() {
  //   this.combine.postUser(this.formData).subscribe(() => {
  //     alert("Successful")
  //   });

  // }



  subscribeBookings() {

    const data = {
      name: this.addForm.name,
      phoneNumber: this.addForm.phone,
      email: this.addForm.email,
      movieId: this.addForm.movieId,
      theatreId: this.addForm.theatreId,
      location: this.addForm.location,
      bookingDate: this.addForm.bookingDate,
      numberOfSeats: this.addForm.numberOfSeats
    }


    this.combine.postBooking(data).subscribe(() => {
      if(data.name != ""){
      if(Number(data.numberOfSeats) > 0)
      {
        if(data.email !== "" &&data.email.includes("@"))
        {
          if(data.phoneNumber != "")
          {
            if(data.movieId !="")
            {
              if(data.theatreId !="")
              {
                if(data.location !="")
                {
                  if(data.bookingDate !="")
                  {
                  alert("Successful");
                  }else{alert("Enter Date")}
                }else{alert("Enter City")}
              }else{alert("Select Theatre")}
            }else{alert("Select Movie")}
          }else(alert("Emter Phonenumber"))
        }else{alert("Emter valid Email")}
      }else{alert("Enter valid No of seats")}
      }
      else{
        alert("Enter Name")
      }
    });
  }

getDate(){
  var date:any=new Date();
  var todayDate:any=date.getDate();
  if(todayDate<10){
    todayDate="0"+todayDate;
  }
  var month=date.getMonth()+1;
  if(month<10){
    month="0"+month;
  }
  var year:any=date.getFullYear();
  this.minDate=year+"-"+month+"-"+todayDate;
}

}



