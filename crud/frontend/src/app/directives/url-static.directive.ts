import { environment } from './../../environments/environment.prod';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[urlStatic]'
})
export class UrlStaticDirective {

  constructor(private el:ElementRef) {
    if(environment.production){
      const origin = location.origin
      const srcO = el.nativeElement.src
      const srcI = srcO.replace(origin,'')
      const srcN = `${origin}/${environment.srcStatic}${srcI}`
      el.nativeElement.src = srcN
      console.log(environment.production)
      console.log(srcI)
      console.log(srcN)
    }
  }

}
