import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { EmployeesComponent } from './employees.component';

@NgModule({
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule
  ],
  declarations: [EmployeesComponent]
})
export class EmployeesModule { }
