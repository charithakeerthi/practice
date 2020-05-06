import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-parent',
  templateUrl: './input-parent.component.html',
  styleUrls: ['./input-parent.component.css']
})
export class InputParentComponent implements OnInit {
  name: string = 'Reddy';
  mobile: number = 9567890234;
  constructor() { }

  ngOnInit(): void {
  }

}
