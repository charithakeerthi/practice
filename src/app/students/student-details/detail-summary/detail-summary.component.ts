import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-summary',
  templateUrl: './detail-summary.component.html',
  styleUrls: ['./detail-summary.component.css']
})
export class DetailSummaryComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back(); 
  }


}
