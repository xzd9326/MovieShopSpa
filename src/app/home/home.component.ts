import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { MovieCard } from '../shared/models/MovieCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies!: MovieCard[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    console.log('Inside the Home Component init method ')
    // Angular Life Cycle Hook method
    // until you subscribe to an observable, its not gonna be executed
    this.movieService.getTopGrossingMovies().subscribe(m => {
      this.movies = m;
      console.table(this.movies)
    });
    // dbContext.Movies.Where(m => m.Id=2).ToListAsync();
  }

// you can run a component using its selector, just like partial view in MVC
}
