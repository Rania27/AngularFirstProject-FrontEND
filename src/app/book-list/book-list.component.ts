import { Component, OnInit } from '@angular/core';
import {IBook } from './Book'
import {StarComponent } from '../shared/Star.Component'
import { BookService } from '../Services/Book.service';
import { SearchService } from '../Services/Search.service';

import { Injectable } from "@angular/core";


import { Observable } from "rxjs/Observable";
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  
  
})
export class BookListComponent implements OnInit {


PageTitle : String ='Livres';
imageWidth : number = 100;
imageMargin : number =50;
listFilter : string = ''; 
 Livres : IBook[] ;
errorMessage : string;
searchterms : IBook[];
 constructor ( private _Livres : BookService){
  //this.Livres = this._Livres.getBook();

 }


  SearchBook(title : HTMLInputElement)
  {
     this._Livres.Search(title)
     .subscribe( Livres => this.Livres = Livres, error => this.errorMessage = <any>error);

  }
  


 ngOnInit() {

  this._Livres.getBooks()
  .subscribe( Livres => this.Livres = Livres, error => this.errorMessage = <any>error);
}
 /* [
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
   
]*/






}

