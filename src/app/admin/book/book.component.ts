import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book.model";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  book: Book = new Book();
  errorMessage: string = "";

  constructor(private bookService: BookService) { }

  saveBook() {
    this.bookService.saveBook(this.book).subscribe(data => {
      //...
    }, err => {
      this.errorMessage = 'Unexpected error occured.';
      console.log(err);
    });
  }
}
