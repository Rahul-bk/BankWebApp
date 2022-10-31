import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ab:ElementRef) {
    console.log("MODULE",ab)
    ab.nativeElement.style.backgroundColor="aqua"
   }

}
