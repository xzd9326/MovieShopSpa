import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateCastComponent } from './create-cast/create-cast.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { TopPurchasesComponent } from './top-purchases/top-purchases.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path: 'create-cast/:id', component: CreateCastComponent},
      {path: 'create-movie/:id', component: CreateMovieComponent},
      {path: 'top-purchases/:id', component: TopPurchasesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
