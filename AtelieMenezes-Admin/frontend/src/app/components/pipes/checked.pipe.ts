import { picAlbum } from './../../models/user.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checked'
})
export class CheckedPipe implements PipeTransform {

  transform(list: picAlbum[],value:boolean ): picAlbum[] {
    const v = list.filter(a=>{return a.checked == value});
    console.log(v)
    return v
  }

}
