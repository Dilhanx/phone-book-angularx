import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import{FormsModule}from'@angular/forms';
import { PhoneBookService } from "../phone-book.service";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    FormComponent
  ],
  providers:[
    PhoneBookService
  ],
  declarations: [FormComponent]
})
export class FormModule { }
