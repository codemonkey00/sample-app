//angular libraries
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

//materials
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

// 3rd party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//routes
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { appRoutes } from './app.routes';

//app modules/components
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { EmployeesModule } from './employees/employees.module';


@NgModule({
  imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,

        FontAwesomeModule,
        NgbModule,

        CustomerModule,
        HomeModule,
        LayoutModule,
        EmployeesModule
    ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
