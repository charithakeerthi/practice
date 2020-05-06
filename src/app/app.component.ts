import { Component, ViewEncapsulation } from '@angular/core';

class provider1{
  myprov =  'Hello Provider';
  constructor(){
    console.log("This is provider 1");
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>HEllo</h1>`,
  styleUrls: ['./app.component.css'],
  // styles: ['h1 { color:red; }']
  // preserveWhitespaces: true,
  viewProviders: [provider1],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'practice';
  name: string = "Reddy";
  imgPath: string = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg";
  
  constructor(public prov: provider1){
   console.log(prov.myprov);
  }

  getData(){
      this.name = "Reddamma";
  }
}
