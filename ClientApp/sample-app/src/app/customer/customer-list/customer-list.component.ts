import { Component, Input, OnInit } from '@angular/core';

import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { Customer } from '../../../shared/classes/customer';

import { CustomerService } from '../../../core/services/customer.service';
import { SessionService } from '../../../core/services/session.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})

export class CustomerListComponent implements OnInit {

  customerList: Customer[] = [];

  constructor(
    private _customerService: CustomerService,
    private _sessionService: SessionService) { }

  ngOnInit() {
    
    if ( this._sessionService.getCustomerListCount() <= 0 || 
      ( this._sessionService.getCustomerListCount() != this.customerList.length &&
      this.customerList.length > 0 )) {
      
        this.getCustomerList();
    }
    else{
      this.customerList = this.customerList = this._sessionService.getCustomerList();
    }
  }

  getCustomerList() {

    this._customerService.getCustomerList()
    .subscribe(result => {

      console.log('customer list: ', result);
      this._sessionService.setCustomerList(Array.from(result));
      this.customerList = result;
    })
  }

  panelChange($event: NgbPanelChangeEvent)
  {
    sessionStorage.setItem('selectedId', $event.panelId);
    console.log('id selected: ', $event);
  }

  updateCustomerList() {
    console.log('get updated list');
    this.customerList = this.customerList = this._sessionService.getCustomerList();
  }

  updateCustomer(cust: Customer) {
    cust.updatedDateTime = new Date().toISOString();
    this._sessionService.updateCustomer(cust);

    console.log('updated list', this._sessionService.getCustomerList());
  }
}
