import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list = [
    {
      name: "Dilhan",
      phoneNumber: "077-572-8205",
    },
    {
      name: "Deshan",
      phoneNumber: "077-572-8206",
    },

  ]


  http: Http


  constructor() { }

  ngOnInit() {
  }

}
