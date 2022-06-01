import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { CreateCastComponent } from './create-cast/create-cast.component';
import { TopPurchasesComponent } from './top-purchases/top-purchases.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    CreateMovieComponent,
    CreateCastComponent,
    TopPurchasesComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
