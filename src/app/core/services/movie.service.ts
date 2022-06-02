import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCard } from 'src/app/shared/models/MovieCard';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  // HomeComponent will call this method
  getTopGrossingMovies(): Observable<MovieCard[]> {

    // https://localhost:7067/api/Movies/top-grossing -> JSON Array of Movie Card
    // XMLHttpRequest
    // HttpClient (Angular Created)

    return this.http.get<MovieCard[]>('https://localhost:7067/api/Movies/top-grossing');

  }

  getMovieDetails(id: number) {

  }

  getMoviesByGenre(genreId: number) {

  }

}
