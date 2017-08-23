import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { PhoneBookService } from "../phone-book.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list=[]
  @Output() onForm: EventEmitter<any> = new EventEmitter();
  Form(){
    this.onForm.emit()
  }


  constructor(private PhoneBookService: PhoneBookService) { }

  ngOnInit() {
  
    this.PhoneBookService.featchPhoneBook().subscribe(data =>{ this.list=data});
  }

}
