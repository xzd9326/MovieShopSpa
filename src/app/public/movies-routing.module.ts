import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {
    path: '', component: MoviesComponent,
    children: [
      { path: 'details/:id', component: MovieDetailsComponent },
      { path: 'cast/details/:id', component: CastDetailsComponent }
    ]
  }
];

// http://localhost:4200/ => HomeComponent
// http://localhost:4200/movies => MoviesComponent
// http://localhost:4200/movies/details/3 => MovieDetailsComponent
// http://localhost:4200/movies/cast/details/3 => CastDetailsComponent

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
