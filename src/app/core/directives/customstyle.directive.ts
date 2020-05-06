import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

  constructor(private el: ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.background = 'violet';
  }

  @HostBinding('style.color') bgcolor: string;
  @HostBinding('class.text-danger')private ishovering: boolean;

  @HostListener('click') onClick() {
    // alert("clicked!");
    this.el.nativeElement.style.color = "blue";
  }

  @HostListener('mouseover') onMouseOver() {
    // this.el.nativeElement.style.color = "green";
    this.bgcolor = 'green';
  }

  @HostListener('mouseout') onMouseOut() {
    // this.el.nativeElement.style.color = "cyan";
    this.ishovering = true;
  }

}
