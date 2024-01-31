import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { ServiceAdapter } from './service-adapter.service';
import { Customer } from '../../shared/classes/customer';

@Injectable({
  providedIn: 'root'
})
export class SessionService extends ServiceAdapter {

    private _customerList: Customer[] = [];

  constructor(private http: HttpClient) {
    super(http);
  }

  setCustomerList(value: Customer[]){
    this._customerList = value;
    console.log('cust list: ', this._customerList);
  }

  getCustomerList() {
    return this._customerList;
  }

  getCustomerListCount() {
    return this._customerList.length;
  }

  addCustomerToList(newCustomer: Customer) {

    var maxId = this._customerList.reduce((a,b) => a.id>b.id?a:b).id;

    newCustomer.id = maxId + 1;
    this._customerList.push(newCustomer);
  }

  updateCustomer(cust: Customer) {
    console.log('updateCustomer: ', cust);
    let custIndex = this._customerList.findIndex(x => x.id === cust.id);
    
    if(custIndex){        
        this._customerList[custIndex] = cust;
    }
  }
}