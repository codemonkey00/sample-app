import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatSelectChange } from '@angular/material/select';
import { MatSort, Sort } from '@angular/material/sort';

import { EmployeeService } from '../../core/services/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {

  employeeList: any = [];

  displayedColumns: string[] = [
    'name',
    'birth_year',
    'created',
    'height',
    'mass'
  ];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployeeList()
    .subscribe(results => {
      this.employeeList = results.results;
      console.log('swapi results: ', results);
    },
    err => {
      console.log('swapi error: ', err);
    })
  }

}
