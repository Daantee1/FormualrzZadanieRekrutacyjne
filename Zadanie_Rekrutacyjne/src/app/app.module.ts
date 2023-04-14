import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerdateDirective } from './shared/customerdate.directive';




@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    CustomerdateDirective

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
