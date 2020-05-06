import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // number: String = "data added";
  // localStorage.setItem('data', number);
  mynum: any;

  constructor() {
    let number = "data added";
  localStorage.setItem('data', number);
   }

  ngOnInit(): void {
  }

  getAdd(){
  let number = "data added";

    console.log('data', number);
    this.mynum = localStorage.getItem('data');

  }

}
