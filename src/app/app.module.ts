import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes   = [

  {

    path: '',

    redirectTo: 'users',

    pathMatch: 'full',

  },

  {

    path: 'car-list',

    component: CarListComponent,

  },

  {

    path: 'car-details',

    component: CarDetailsComponent,

  },
  {

    path: '**',

    component: PageNotFoundComponent,

  },

];
@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarDetailsComponent,
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forChild(routes)],

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
