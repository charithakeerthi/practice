import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back(); 
  }

}
