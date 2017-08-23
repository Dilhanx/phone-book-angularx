import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { PhoneBookService } from "../phone-book.service";
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ListComponent
  ],
  providers:[
    PhoneBookService
  ],
  declarations: [ListComponent]
})
export class ListModule { }
