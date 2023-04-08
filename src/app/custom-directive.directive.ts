import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit{

  constructor(private elementRef : ElementRef , private renderer : Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','lightgreen')
  }

}
