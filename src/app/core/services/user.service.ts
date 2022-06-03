import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserPurchasedMovies() {
    // call the API https://localhost:7067/api/User/purchases
    // send the bearer token in the header
    // we can get the token from local storage and pass it in the header as bearer
    // separate service, interceptors...
  }

  getUserFavoritedMovies() {

  }

  getUserReviewedMovies(){
    
  }

  purchaseMovie() {

  }

}
