import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { faUsersGear, faBuildingUser } from '@fortawesome/free-solid-svg-icons';

import { CustomerService } from '../../core/services/customer.service';
import { SessionService } from '../../core/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
        .flex-container {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(auto-fill, minmax(320px,1fr));
          grid-auto-rows: 20px;
        }
        .flex-item {}

        @media (min-width: 768px) {
            .flex-container {
                grid-template-columns: repeat(auto-fill, minmax(400px,1fr));
            }
        }


        @media (max-width: 768px) {
            .flex-container {
                grid-template-columns: repeat(auto-fill, minmax(325px,1fr));
            }
        }


        @media (max-width: 350px) {
            .flex-container {
                grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
            }
        }
    `]
})
export class HomeComponent implements OnInit, AfterViewChecked {

  _faUsersGear = faUsersGear;
  _faBuildingUser = faBuildingUser;

  customerCount = 0;
  constructor(
    private _customerService: CustomerService,
    private _sessionService: SessionService) { }

  ngOnInit() {
    // get customer count
    if (this._sessionService.getCustomerListCount() <= 0) {
      this._customerService.getCustomerCount()
        .subscribe(result => {
          this.customerCount = result;
          console.log('customer count: ', result);
        })
    }
    else{
      this.customerCount = this._sessionService.getCustomerListCount();
    }
  }

  ngAfterViewChecked() {
    this.resizeAllGridItems();
  }

  onResize(event: any) {
    this.resizeAllGridItems();
  }

  resizeGridItem(item: any) {

    if (item.querySelector('.ibox')) {

      var grid = document.getElementsByClassName("flex-container")[0];
      var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));

      var rowSpan = Math.ceil((item.querySelector('.ibox').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
      item.style.gridRowEnd = "span " + rowSpan;
    }
  }

  resizeAllGridItems() {
    var allItems = document.getElementsByClassName("flex-item");

    for (var x = 0; x < allItems.length; x++) {
      this.resizeGridItem(allItems[x]);
    }
  }
}
