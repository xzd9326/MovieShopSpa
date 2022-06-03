import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService, private router: Router) {

  }
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{

    // check if user is auth-> JWT token is present and JWT is not expired
    // then return true
    console.log('Inside the Can Activate method of Auth Guard')
    return this.accountService.isLoggedIn.pipe(map(response => {
      if (response) {
        return true;
      }
      else {
        // navigate to login page
        this.router.navigate(["/account/login"]);
        return false;
      }
    }));
    
    //otherwise return false
  }
  
}
