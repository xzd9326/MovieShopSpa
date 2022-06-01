import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PurchasesComponent } from './purchases/purchases.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    PurchasesComponent,
    FavoritesComponent,
    ReviewsComponent,
    EditProfileComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
