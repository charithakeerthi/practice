import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {
  @Output() getName = new EventEmitter<any>();
  @Output('getNumber') number =new EventEmitter<number>();
  myname ="Reddy";
  mynumber =3534546456;
  constructor() { }

  ngOnInit(): void {
  }

  getmyName(){
    this.getName.emit(this.myname);
    this.number.emit(this.mynumber);
  }

}
