import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appPattern]'
})
export class PatternDirective {

  constructor(private el : ElementRef) { }
  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = (<KeyboardEvent>event);
    let keyCode = e.keyCode;
    if(e.shiftKey && !(keyCode == 57 || keyCode == 48)){
      e.preventDefault();
      return;
    }
    if(keyCode != 8 && (!(48 <= keyCode && keyCode <= 57) && keyCode !== 189)){
      e.preventDefault()
    }
  }
}