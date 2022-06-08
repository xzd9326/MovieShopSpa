import { Component, OnInit } from '@angular/core';
import { Purchases } from 'src/app/shared/models/Purchases';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchases!: Purchases;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // call the UserService, which will call the user api method https://localhost:7067/api/User/purchases
    this.userService.getUserPurchasedMovies().subscribe( resp => {
      console.log(resp);
      this.purchases = resp;
    });
  }

}
