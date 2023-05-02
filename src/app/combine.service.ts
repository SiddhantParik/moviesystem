import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CombineService {

  constructor(private httpClient: HttpClient) { }

  getMovie(){
    return this.httpClient.get('https://localhost:7048/api/Movies');
  }

  getTheater(){
    return this.httpClient.get('https://localhost:7048/api/Theatres');
  }

  getUser(){
    return this.httpClient.get('https://localhost:7048/api/Admins');
  }

  postMovie(data:any){
    return this.httpClient.post('https://localhost:7048/api/Movies', data);
  }

  postUser(data:any){
    return this.httpClient.post('https://localhost:7048/api/Admins', data);
  }

  postBooking(data:any){
    return this.httpClient.post('https://localhost:7048/api/Bookings', data);
  }

}
