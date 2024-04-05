import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';

import { Book } from '../book';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookService } from '../book.service';
import { MessageService } from '../message.service';

@Component({
  standalone: true,
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  imports: [
    NgIf,
    NgFor,
    BookDetailComponent,
    NgOptimizedImage
  ],
})
export class BooksComponent implements OnInit{
  selectedBook?: Book;
  books: Book[] = [];

  constructor(private bookService: BookService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.messageService.add(`BooksComponent: Selected book id=${book.id}`);
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books)
  }


}
