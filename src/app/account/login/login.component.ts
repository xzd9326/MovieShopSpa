import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { Login } from 'src/app/shared/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel : Login = {
    email: '', password: ''
  }

  invalidLogin: boolean = false;
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  submit () {
    console.log('Clickd on submit button');
    console.log(this.loginModel)
    this.accountService.login(this.loginModel)
      .subscribe(
        // if true
        // redirect to home page
        // Login Component should notify the header component (Unrelated components) that user has entered correct password
        // Communication between unrelated components
        // We use Services, Rxjs Subjects->

        // @Input and @Output only for parent and child components
        data => this.router.navigateByUrl('/'),
        (err: HttpErrorResponse) => {
          // if error, 401, 500, 403
          // stay on the same page, and show error message to the user
          this.invalidLogin = true;
        }
      );
    // call the API
  }

}
