import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[OnlyNumber],[tabText]'
})

export class OnlyNumber {

  regexStr = '^[()0-9]*$';
  //regexStr = ".*[^0-9].*";
  constructor(private el: ElementRef) { }

  @Input() OnlyNumber: boolean;
  @Output() tabText: boolean;
  @Output() itch: EventEmitter<any> = new EventEmitter();
  @Output() warning: EventEmitter<any> = new EventEmitter();
  /// our click is a representation of a scratch
  @HostListener('onClick') onClick() {
    ///We are emitting itchies!!
    /* this.itch.emit('itch itch itch');
    console.log("this.itch");
    console.log(this.itch); */
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent>event;
    let keyCode = e.keyCode;
    console.log(keyCode)
    if (this.OnlyNumber) {
      if (keyCode >= 96 && keyCode <= 105) {
        keyCode -= 48;
      }
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(keyCode) !== -1 ||
        // Allow: Ctrl+A
        (keyCode == 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+C
        (keyCode == 67 && e.ctrlKey === true) ||
        // Allow: Ctrl+V
        (keyCode == 86 && e.ctrlKey === true) ||
        // Allow: Ctrl+X
        (keyCode == 88 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (keyCode >= 35 && keyCode <= 39)) {
        return;
      }
      let ch = String.fromCharCode(keyCode);
      let regEx = new RegExp(this.regexStr);
      if (regEx.test(ch)) {
        this.tabText = true;
        return;
      } else {
        this.warning.emit(false)
        e.preventDefault();
      }
    } else {
      this.warning.emit(false);
    }
  }

  @HostListener('blur', ['$event']) onBlur(event) {
    let e = <KeyboardEvent>event;
    if (this.OnlyNumber) {
      /* console.log("this.OnlyNumber");
      console.log(event.target.value); */
      this.tabText = false;
    }
  }
}