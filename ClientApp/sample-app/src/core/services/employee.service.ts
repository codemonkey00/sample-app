import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceAdapter } from './service-adapter.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ServiceAdapter {

  private _getSWEmployees = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) {
    super(http);
  }

  getEmployeeList(): Observable<any> {
    return this.getactionNoHeaders<any>(this._getSWEmployees);
  }

}
