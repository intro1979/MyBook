import { Component, OnInit, Inject, Input } from '@angular/core';
import { IBook } from '../../../../../FBcrud/src/app/services/book';
import { BookService } from '../../../../../FBcrud/src/app/services/book.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.scss']
})
export class EditbookComponent implements OnInit {
  @Input() id!: string;
  book!: IBook;

  constructor(
    private bkS: BookService,
    public dialogRef: MatDialogRef<EditbookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBook
  ) { }

  ngOnInit(): void {
    if(this.id) 
      this.bkS.getBookByID(this.id).subscribe(res => {
        this.book = res
      });
  }
  onUpdate() {
    this.bkS.updateBook(this.book).then(() => {
      this.dialogRef.close();
      console.log('Data add successfully');
    })
  }

  setPrice(book: IBook, price: number) {
    this.bkS.modifyBookPrice(book, price)
  }
}
