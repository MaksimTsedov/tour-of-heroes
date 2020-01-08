import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSlide]'
})
export class SlideDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
