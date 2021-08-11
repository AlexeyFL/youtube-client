/* eslint-disable operator-linebreak */
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

  @Output() sortItems = new EventEmitter();

  inputValue: string | null;

  changeDateSort: boolean;

  changeDateAscDesc: string;

  changeViewsSort: boolean;

  changeViewsAscDesc: string;

  constructor() {
    this.categories = [];
    this.inputValue = null;
    this.changeDateSort = false;
    this.changeDateAscDesc = 'desc';
    this.changeViewsSort = false;
    this.changeViewsAscDesc = 'desc';
  }

  passSearchString(e: Event) {
    this.searchString.emit((e.target as HTMLInputElement).value);
  }

  sortByDate(order: string) {
    this.changeDateSort = !this.changeDateSort;
    if (this.changeDateSort) {
      this.changeDateAscDesc = 'asc';
    } else {
      this.changeDateAscDesc = 'desc';
    }
    let sortArray = [];

    switch (order) {
      case 'asc':
        sortArray = this.categories.sort(
          (a, b) =>
            Date.parse(a.snippet.publishedAt) -
            Date.parse(b.snippet.publishedAt),
        );
        this.sortItems.emit(sortArray);
        break;
      case 'desc':
        sortArray = this.categories.sort(
          (a, b) =>
            Date.parse(b.snippet.publishedAt) -
            Date.parse(a.snippet.publishedAt),
        );
        this.sortItems.emit(sortArray);
        break;

      default:
        break;
    }
  }

  sortByView(order: string) {
    this.changeViewsSort = !this.changeViewsSort;
    if (this.changeViewsSort) {
      this.changeViewsAscDesc = 'asc';
    } else {
      this.changeViewsAscDesc = 'desc';
    }
    let sortArray = [];
    switch (order) {
      case 'asc':
        sortArray = this.categories.sort(
          (a, b) =>
            Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
        );
        this.sortItems.emit(sortArray);
        break;
      case 'desc':
        sortArray = this.categories.sort(
          (a, b) =>
            Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
        );
        this.sortItems.emit(sortArray);
        break;

      default:
        break;
    }
  }
}
