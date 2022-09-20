import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IBook } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private afs: Firestore
  ) { }

  addBook(book: IBook) {
    const booksRef = collection(this.afs, 'books');
    return addDoc(booksRef, book);
  }

  getBooks(): Observable<IBook[]> {
    const booksRef = collection(this.afs, 'books');
    return collectionData(booksRef, {idField: 'id'}) as Observable<IBook[]>;
  }

  deleteBook(book: IBook) {
    const bookDocRef = doc(this.afs, `books/${book.id}`);
    return deleteDoc(bookDocRef);
  }
}
