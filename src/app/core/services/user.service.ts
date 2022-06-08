import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchases } from '../../shared/models/Purchases';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserPurchasedMovies() {
    // call the API https://localhost:7067/api/User/purchases
    // send the bearer token in the header
    // we can get the token from local storage and pass it in the header as bearer
    // separate service, interceptors...

    return this.http.get<Purchases>('https://localhost:7067/api/User/purchases');
  
  }

  getUserFavoritedMovies() {

  }

  getUserReviewedMovies(){
    
  }

  purchaseMovie() {

  }

}
