import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { ServiceAdapter } from './service-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends ServiceAdapter {

  private _getCustomerCount = `${environment.apiUrl}Customer/GetCustomerCount`;
  private _getCustomerList = `${environment.apiUrl}Customer/GetCustomerList`;

  constructor(private http: HttpClient) {
    super(http);
  }

  getCustomerCount(): Observable<number> {
    return this.getaction<number>(this._getCustomerCount);
  }

  getCustomerList(): Observable<any> {
    return this.getaction<any>(this._getCustomerList);
  }
}