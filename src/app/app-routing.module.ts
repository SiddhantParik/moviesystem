import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { LoginComponent } from './pages/login/login.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AddMovieComponent } from './Components/add-movie/add-movie.component';
import { AddTheatreComponent } from './Components/add-theatre/add-theatre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminpage', component: AdminPageComponent },
  { path: 'addMovie', component: AddMovieComponent },
  { path: 'addTheatre', component: AddTheatreComponent },
  { path: 'LogOut', component: HomeComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
