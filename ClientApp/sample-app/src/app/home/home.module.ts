import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    FontAwesomeModule
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
