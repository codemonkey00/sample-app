import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomerComponent } from './customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbAccordionModule
  ],
  declarations: [
    CustomerComponent,
    CustomerFormComponent,
    CustomerListComponent
  ],
  exports: [
    CustomerComponent,
    CustomerFormComponent,
    CustomerListComponent
  ]
})
export class CustomerModule { }
