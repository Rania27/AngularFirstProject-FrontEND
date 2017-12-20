import { Injectable } from "@angular/core";
import { IBook } from "../book-list/Book";

import { Observable } from "rxjs/Observable";
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {
  
private _bookUrl = 'https://localhost:44353/api/Books1';
//private _bookUrl ='..\..\assets\livres.json';
constructor (private _http: Http){
}

getBooks() : Observable<IBook[]> {
   return this._http.get(this._bookUrl)
   .map((response : Response ) => <IBook[]>response.json())
   .do(data => console.log("All: " + JSON.stringify(data)))
   .catch(this.handleError);


  }
  getBook(id: number): Observable<IBook> {
    return this.getBooks()
        .map((products: IBook[]) => products.find(p => p.bookId === id));
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
/*
getBook() : IBook[] {
  return [
        {
          "BookId": 1,
          "BookName": "La formule de dieu",
          "BookCode": "GDN-0011",
          "releaseDate": "March 19, 2016",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 1.2,
          "imageUrl":"../assets/images/work_1.jpg"
         
    
        },
      {
          "BookId": 2,
          "BookName": "Le symbole perdu",
          "BookCode": "GDN-0023",
          "releaseDate": "March 18, 2016",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "../assets/images/work_3.jpg"
      },
      {
        "BookId": 3,
        "BookName": "Harry Potter 4",
        "BookCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 1.2,
        "imageUrl":"../assets/images/work_5.jpg"
       
    
      },
      {
        "BookId": 4,
        "BookName": "Harry  Potter 7",
        "BookCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 1.2,
        "imageUrl":"../assets/images/work_4.jpg"
       
    
      }
       
    ]
}
*/
}