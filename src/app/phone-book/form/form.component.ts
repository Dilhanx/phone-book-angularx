import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  Delete(value){
    console.log("Delete")
    console.log(JSON.stringify(value))
  }
  Add(value){
    console.log("Add")
    console.log(JSON.stringify(value))
    this.onAdd.emit()
  }
}
