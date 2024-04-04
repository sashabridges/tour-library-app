import { Component } from '@angular/core';
import { BooksComponent } from './books/books.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Books';
}
