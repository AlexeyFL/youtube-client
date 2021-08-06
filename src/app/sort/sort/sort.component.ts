import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchItem } from '../../models/search-item';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  @Input() categories: SearchItem[];

  @Output() searchString = new EventEmitter<string | null>();

  inputValue: string | null;

  constructor() {
    this.categories = [];
    this.inputValue = null;
  }

  passSearchString(e: Event) {
    this.searchString.emit((e.target as HTMLInputElement).value);
  }
}
