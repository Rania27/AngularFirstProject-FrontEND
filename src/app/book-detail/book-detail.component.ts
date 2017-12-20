import { Component, OnInit } from '@angular/core';
import { IBook } from '../book-list/Book';

import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../Services/Book.service';

@Component({
 //On n'a pas besoin du selector we won't nest it !
  // selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  pageTitle: string = 'Book Detail';
  errorMessage: string; 
  book : IBook;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: BookService) {
  }

  ngOnInit() {

    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getBook(id);
    }
  }
  getBook(id: number) {
    this._productService.getBook(id).subscribe(
      product => this.book = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/BookDetail']);
  }

}




  


