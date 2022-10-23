import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom1]'
})
export class Custom1Directive {

  constructor(public el:ElementRef) { }

@HostListener('mouseenter')userenter(){this.el.nativeElement.style.backgroundColor='red'}

@HostListener('mouseleave')userleave(){this.el.nativeElement.style.backgroundColor=''}

@HostListener('click') userclick(){this.el.nativeElement.style.backgroundColor='aqua'}

@HostListener('copy') usercopy(){this.el.nativeElement.style.backgroundColor='pink'}

@HostListener('cut') usercut(){this.el.nativeElement.style.backgroundColor='blue'}

@HostListener('paste') userpaste(){this.el.nativeElement.style.backgroundColor='yellow'}

@HostListener('blur') userblr(){this.el.nativeElement.style.backgroundColor='green'}

@HostListener('drag') userdrag(){this.el.nativeElement.style.backgroundColor='brown'}




}
