import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

import { LayoutComponent } from './layout.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule
  ],
  declarations: [
    LayoutComponent,
    NavigationComponent,
    PageFooterComponent,
    TopNavBarComponent
  ],
  exports: [
    NavigationComponent,
    PageFooterComponent,
    TopNavBarComponent
  ]
})
export class LayoutModule { }
