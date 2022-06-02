import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Login } from 'src/app/shared/models/Login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSubject = new BehaviorSubject<any>({} as User);
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private isLoggedIn = this.isLoggedInSubject.asObservable();

  private jwtHelper = new JwtHelperService();

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
          // Create the RxJsSubject with some values,
          // pipe -> two ends
          // Login component will call login method -> push the value into the Subject (a special Observable)

          // HeaderComponent can subscribe to this subject to get latest value
          // PurchaseComponent
          // FavoritesComponent
          // Publish and Subscribe pattern
          this.populateUserInfoFromJwtToken();
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
    // reset the observables to initial values
    localStorage.removeItem('token');
    this.currentUserSubject.next({} as User);
    this.isLoggedInSubject.next(false);
  }

  populateUserInfoFromJwtToken() {
    // read the token from the local storage and decode the token and create the user object with decoded values from token

    var tokenValue = localStorage.getItem('token');

    // if token is present and token is not expired
    if (tokenValue && this.jwtHelper.isTokenExpired(tokenValue)) {

      // decode the token and push the values to observables
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);

      // push the decode token value to Observables
      this.currentUserSubject.next(decodedToken);
      this.isLoggedInSubject.next(true);
    }
  }
}
