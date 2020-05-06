import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent implements OnInit {
  isShow: boolean = false;
  IsMale: boolean = true;
  IsAdmin = true;
  person: string = "Charitha";
  myclassType='offline';
  myclasses = 'online';
  myCountry = "India";

  myClass= 'btn btn-danger two';
  ClassToApply: string = "boldClass text-success";
  ApplyBoldClass: boolean = true;
  ApplyItalicClass: boolean = true;

  AddcssClass()
  {
    let cssClass = {
      boldClass : this.ApplyBoldClass,
      italicsClass : this.ApplyItalicClass
    };
    return cssClass;
  }

  col = "2";
  IsBold: boolean = true;
  fontsize: number = 40;

  FontSize: number = 40;
  IsItalic: boolean = true;

  AddCSSStyles() {
    let CssStyles = {
      'font-weight': this.IsBold ? 'bold' : 'normal',
      'font-style': this.IsItalic ? 'italic' : 'normal',
      'font-size.px': this.FontSize
    };
    return CssStyles;
  }

  employees = [
    { name: "Reddy", mobile: "12345676879",  country: "India"},
    { name: "Mohan", mobile: "234676",  country: "USA"},
    { name: "Aruna", mobile: "343434",  country: "India"},
    { name: "sakshi", mobile: "fgdfgdfg",  country: "UK"}
  ]


  constructor() { }

  ngOnInit(): void {
  }

  
  changeValue(val: boolean) {
    this.IsMale = val;
    // var aa = this.numEnum;
  }

  getColor(country) {
    switch (country) {
      case 'India':
        return 'green';
      case 'UK':
        return 'red';
      case 'USA':
        return 'orange';
    }
  }

  getClass(){
    this.myClass = 'btn btn-info';
  }

}
