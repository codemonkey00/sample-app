import { Routes } from '@angular/router';

//components
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeesComponent } from './employees/employees.component';

export const appRoutes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '', component: LayoutComponent, data: { title: 'Dashboard' },
        children: [
            { path: 'home', component: HomeComponent, data: { title: 'Dashboard'} },

            { path: 'customers', component: CustomerComponent, data: { title: 'Customers'}},
            
            { path: 'employees', component: EmployeesComponent, data: { title: 'Employees'}}
        ]
    }
];
