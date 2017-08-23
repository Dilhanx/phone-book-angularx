import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { PhoneBookService } from "../phone-book.service";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  message
  @Output() onList: EventEmitter<any> = new EventEmitter();
  constructor(private PhoneBookService: PhoneBookService) { }

  ngOnInit() {
  }
  List(){
    this.onList.emit()
  }
  Add(values){
    this.PhoneBookService.addPerson(values).subscribe(data =>{ this.message=data.text()});
    
  }
  Delete(values){
   
    this.PhoneBookService.deletePerson(values).subscribe(data =>{ this.message=data.text()});
  }
  
}
