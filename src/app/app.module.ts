import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { LoginComponent } from './pages/login/login.component';
import { BookingComponent } from './pages/booking/booking.component';
import { HeaderComponent } from './sharepage/header/header.component';
import { AddMovieComponent } from './Components/add-movie/add-movie.component';
import { AddTheatreComponent } from './Components/add-theatre/add-theatre.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    BookingComponent,
    LoginComponent,
    HeaderComponent,
    AddMovieComponent,
    AddTheatreComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
