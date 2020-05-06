import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  constructor(private elref:ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  // @HostListener('mouseleave') OnMouseLeave() {
  //   this.changeColor('blue');
  // }

  // @HostListener('click') onClick() {
  //   // alert("clicked!");
  //   this.elref.nativeElement.style.color = "blue";
  // }

}
