import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back(); 
  }

}
