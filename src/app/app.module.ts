import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AffComponent } from './aff/aff.component';
import { LivreComponent } from './livre/livre.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BookListComponent } from './book-list/book-list.component';
import { StarComponent } from './shared/Star.Component';
import { BookFilterPipe } from './book-list/book-filter.pipe';
import { BookService } from './Services/Book.service';

import {RouterModule} from '@angular/router';
import {Observable} from 'rxjs';
import { HttpModule } from '@angular/http';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CounterComponent } from './counter/counter.component';
import { ActuComponent } from './actu/actu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchService } from './Services/Search.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AffComponent,
    LivreComponent,
    TestimonialComponent,
    BookListComponent,
    StarComponent,
    BookFilterPipe,
    BookDetailComponent,
    CounterComponent,
    ActuComponent,
    WelcomeComponent,
    
  ],
  imports: [
     BrowserModule,
     FormsModule,
     HttpModule,
     RouterModule.forRoot([ 
       {path : 'livre' , component : LivreComponent},
       {path : 'BookList' , component : BookListComponent},
       {path : 'BookList/:id' , component : BookDetailComponent}
       
     ])  // { useHash : true}
     
    
     
  ],
  providers: [BookService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
