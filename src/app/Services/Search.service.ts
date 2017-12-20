import { Injectable } from "@angular/core";
import { IBook } from "../book-list/Book";

import { Observable } from "rxjs/Observable";
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {
  
private _bookUrl = 'https://localhost:44353/api/Books1';
//private _bookUrl = '..\assets\livres.json';
constructor (private _http: Http){
}

Search(asp: HTMLInputElement) : Observable<IBook[]> {
    let v = asp.value.toString();
   return this._http.get(this._bookUrl+'/'+v)
   .map((response : Response ) => <IBook[]>response.json())
   .do(data => console.log("All: " + JSON.stringify(data)))
   .catch(this.handleError);

}
private handleError (error : Response) {
  console.error(error);
  return Observable.throw(error.json().error || 'Server error');
}
}