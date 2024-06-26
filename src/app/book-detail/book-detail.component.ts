import { Component, Input } from '@angular/core';
import {NgIf, UpperCasePipe, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Book } from '../book';

@Component({
  standalone: true,
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
  imports: [FormsModule, NgIf, UpperCasePipe, NgOptimizedImage],
})
export class BookDetailComponent {
  @Input() book?: Book;
}
