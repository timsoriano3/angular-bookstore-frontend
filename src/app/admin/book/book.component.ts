import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book.model";
import {BookService} from "../../services/book.service";

declare var $: any;

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
      $('#bookModal').modal('hide');
    }, err => {
      this.errorMessage = 'Unexpected error occured.';
      console.log(err);
    });
  }

  showBookModal() {
    $('#bookModal').modal('show');
  }
}
