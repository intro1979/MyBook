import { Component, OnInit } from '@angular/core';
import { IBook } from '../../services/book';
import { BookService } from '../../services/book.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: IBook = {
    name: '',
    author: '',
    genre: '', 
    price: 0
  };

  constructor(
    private bkS: BookService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.bkS.addBook(form.value)
      .then(() => form.reset());
  }
}
