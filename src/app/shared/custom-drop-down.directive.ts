import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDropDown]'
})
export class CustomDropDownDirective {


  constructor() { }

  //property 'class' is nothing but a array of classes
  @HostBinding('class.open') addClass :boolean

  @HostListener('click') onClick()
  {
    this.addClass=!this.addClass
  }

}
