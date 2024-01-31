import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Customer } from '../../../shared/classes/customer';
import { SessionService } from '../../../core/services/session.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent implements OnInit {

  @Output() onCustomerListUpdated: EventEmitter<void> = new EventEmitter<void>();

  customerForm: any;
  submitted: boolean = false;

  constructor(
    private _sessionService: SessionService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.customerForm = this.formBuilder.group({
      'fbFirstName': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'fbLastName': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'fbEmail': ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.customerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.customerForm.invalid)
      return;

    let cust = new Customer;

    cust.firstName = this.customerForm.controls['fbFirstName'].value;
    cust.lastName = this.customerForm.controls['fbLastName'].value;
    cust.email = this.customerForm.controls['fbEmail'].value;

    const today = new Date();
    cust.createdDateTime = today.toISOString();
    cust.updatedDateTime = today.toISOString();

    console.log('new customer: ', cust);
    //add customer
    this._sessionService.addCustomerToList(cust);

    console.log('new cust list: ', this._sessionService.getCustomerList());

    this.onCustomerListUpdated.emit();
    this.resetForm();
  }

  resetForm(): void {
    this.submitted = false;
    this.customerForm.reset();
  }
}
