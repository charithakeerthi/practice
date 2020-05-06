import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {
  eventName: any;
  eventNumber: number;
  constructor() { }

  ngOnInit(): void {
  }

  myValue(event){
    this.eventName = event;
  }

  myNumber(event){
    this.eventNumber = event;
  }

}
