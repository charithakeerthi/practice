import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent implements OnInit {
  @Input() pname: string;
  @Input('pmobile') mobilenumber: number;
  constructor() { }

  ngOnInit(): void {
  }

}
