import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  currentUser!: User;

  constructor(private accountService: AccountService, private router: Router) { 
    this.accountService.isLoggedIn.subscribe(resp => this.isUserLoggedIn = resp );
    this.accountService.currentUser.subscribe(resp => this.currentUser = resp );
  }

  ngOnInit(): void {
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/account/login');
  }
}
