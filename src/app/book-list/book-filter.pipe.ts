


import { Injectable, Pipe, PipeTransform } from '@angular/core';
import {IBook} from './Book';
// Custom pipe
@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class BookFilterPipe implements PipeTransform {

    transform(value: IBook[], args: string): IBook[] {
    let filter : string = args ? args : null;
    return filter ? value.filter((book : IBook) => book.bookName.indexOf(filter) != -1) : value;
 }
}