import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  @ViewChild(CustomerListComponent)
  private custListComponent!: CustomerListComponent;


  constructor() { }

  ngOnInit() {
    
  }

  updateCustomerList(){
    console.log('updateCustomerList');
    this.custListComponent.updateCustomerList();
  }
  
}
