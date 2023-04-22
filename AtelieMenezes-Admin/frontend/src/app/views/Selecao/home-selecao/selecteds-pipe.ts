import { picAlbum } from './../../../models/user.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'selecteds',
    pure: false
})
export class SelectedPip implements PipeTransform {
    transform(items: picAlbum[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.checked);
    }
}