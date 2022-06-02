import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from 'src/app/shared/models/Login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<boolean> {
      // email/pw from the logincomponent post the information to api
      return this.http.post('https://localhost:7067/api/Account/login', login)
      .pipe( map( (response: any) => {
        if (response) {
          // correct email/pw
          // api will return the JWT token if email/pw is valid
          // save the tokern in the browser, localstorage -> browser 'token' : 'adadfafdajfdiafamfldk'
          localStorage.setItem('token', response.token);
          return true;
        }
        return false;
      }));

      
      
      

      // Guards -> just like filters in ASP.NET
      // AuthorizationGuard -> checks the token and see if it is valid and not expired. Checking in the frontend

      // http://localhost:4200/user/purchases -> PurchasesComponent -> Call the API to get all the movies purchased by user ([Authorize]) checking in the backend
      // send the JWT token to the API to get secure data
      // if API validates the JWT token sent by angular app, it will return the required JSON data
      // Component will dispaly the information in the view
      // http://localhost:4200/user/favorites -> FavoritesComponent
      // http://localhost:4200/user/reviews -> ReviewsComponent
      // http://localhost:4200/user/admin/createmovie
      // http://localhost:4200/user/admin/reports
  }

  // from our Nav Bar (Header)
  logout() {

    // remove the JWT token from localstorage
    localStorage.removeItem('token');
  }
}
