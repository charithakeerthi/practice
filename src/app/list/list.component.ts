import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  preserveWhitespaces: true
})
export class ListComponent implements OnInit {

  datefunc: String = "Todays Date";

  constructor() { }

  getList(){
    this.datefunc = "todays date is 19-03-2020"
  }

  ngOnInit(): void {
  }

}
