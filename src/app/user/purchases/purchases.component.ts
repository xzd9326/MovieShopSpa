import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // call the UserService, which will call the user api method https://localhost:7067/api/User/purchases
  }

}
