import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { EditbookComponent } from '../../../../../FBcrud/src/app/components/editbook/editbook.component';
import { IBook } from '../../../../../FBcrud/src/app/services/book';
import { BookService } from '../../../../../FBcrud/src/app/services/book.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: IBook[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'author',
    'author',
    'genre',
    'price'
  ];
  dataSource!: MatTableDataSource<IBook>;

  constructor(
    private bkS: BookService,
    public dialog: MatDialog
  ) {  }

  ngOnInit(): void { 
    this.bkS.getBooks().subscribe((res: IBook[]) => {
      this.books = res;
    })
    this.dataSource = new MatTableDataSource(this.books)
  }
  
  openDialog(book: IBook): void {
    const dialogRef = this.dialog.open(EditbookComponent, {
      width: '250px',
      data: {
        books: {}
      },
    });
  }


  deleteBook(book: IBook) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.bkS.deleteBook(book).then(() => 
       console.log('delete successful'));
    }
  }


}
