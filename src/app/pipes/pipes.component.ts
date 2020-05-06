import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  birthday = new Date(1878, 6, 18);
  
  Employee = [
    {Name : "Ajeet Kumar Singh",MobileNo : 8745645566},
    {Name : "Chandan Kumar Singh",MobileNo : 9445645566}
  ]

  currentDate = new Date();
  constructor() { }

  Name: string = "Ajeeth Singh";
  ngOnInit(): void {
  }

}
