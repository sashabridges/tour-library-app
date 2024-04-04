import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Book } from './book';
import { BOOKS } from './mock-books';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  constructor(private messageService: MessageService) { }

  getBooks(): Observable<Book[]> {
    const books = of(BOOKS);
    this.messageService.add('BookService: fetched books');
    return books;
  }
}