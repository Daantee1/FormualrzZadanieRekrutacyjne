import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customersList: Customer[] = []
  private customerListObs= new BehaviorSubject<Customer[]>([])

  constructor() { }

  addCustomer(customer: Customer){
    this.customersList.push(customer);
    this.customerListObs.next(this.customersList)
  }
  
  removeCustomer(customer: Customer){
    this.customersList = this.customersList.filter(e => e!== customer)
    this.customerListObs.next(this.customersList)
  }
  getCustomerListObs(): Observable<Customer[]>{
    return this.customerListObs.asObservable()
  }
}
