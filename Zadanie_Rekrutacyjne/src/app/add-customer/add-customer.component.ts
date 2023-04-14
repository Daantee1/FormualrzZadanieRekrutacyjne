import { Component } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  constructor(private customersService: CustomersService) {
    this.customersService.getCustomerListObs().subscribe(customer => {
      this.customersList = customer
    })
  }

  customersList = [];
  hideList = false
  hoveredDate: string;
  selectedCustomer: Customer;

  newCustomer = {
    name: '',
    lastName: '',
    vatIdentificationNumber: '',
    address: '',
    created: new Date()
  };

  addCustomer() {

    
    this.customersService.addCustomer(this.newCustomer)
    this.newCustomer = {
      name: '',
      lastName: '',
      vatIdentificationNumber: '',
      address: '',
      created: new Date()
    };

    
  }

  hideListFunc() {
    this.hideList = !this.hideList
  }

  removeCustomer(customer) {
    this.customersService.removeCustomer(customer)
  }

  editCustomer(customer: Customer) {
    this.selectedCustomer = customer
  }
  saveEditedCustomer() {
    this.selectedCustomer = null;
  }


}
