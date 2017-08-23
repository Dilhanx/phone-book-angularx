import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneBookComponent } from './phone-book.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ListModule } from "./list/list.module";
import { FormModule } from "./form/form.module";
import { PhoneBookService } from "./phone-book.service";
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ListModule,
    FormModule,
  ],
  exports:[
    PhoneBookComponent
  ],
  providers:[
    PhoneBookService
  ],
  declarations: [PhoneBookComponent]
})
export class PhoneBookModule { }
