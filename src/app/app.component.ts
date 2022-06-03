import { Component } from '@angular/core';
import { AccountService } from './core/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieshopspa';

  constructor(private accountService: AccountService){

  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class
    this.accountService.populateUserInfoFromJwtToken();
  }
}

// Modules -> components inside those modules

// main.ts => appModule => AppComponent => View
// <partial name=""></partial>
// HomePageView => movieCard