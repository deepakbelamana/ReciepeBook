import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit{

  @Input('customColor')customBgColor : string = 'transparent'

  @HostBinding('style.backgroundColor')backgroundColor:string = 'transparent';

  constructor(private elementRef : ElementRef , private renderer : Renderer2) { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','lightgreen')
  }

  @HostListener('mouseenter')mouseEnter(){
    this.backgroundColor=this.customBgColor;
  }

  @HostListener('mouseleave')mouseLeave(){
    this.backgroundColor='transparent';
  }


}
