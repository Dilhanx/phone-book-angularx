import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  showForm=false;
  Back(){
    this.showForm=true;
  }
  Add(){
    this.showForm=false;
  }
  ngOnInit() {


  }
  

}
