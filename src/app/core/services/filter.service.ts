import { Injectable } from '@angular/core';

export type SortingOptions = {
  isAsc: boolean;
  sortingValue: string;
};

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filteringString: string = '';

  sortingOptions: SortingOptions = {
    isAsc: true,
    sortingValue: '',
  };

  getFilteringString() {
    return this.filteringString;
  }

  setFilteringString(value: string) {
    this.filteringString = value;
  }

  getSortingOptions() {
    return this.sortingOptions;
  }

  setSortingOptions(options: SortingOptions) {
    this.sortingOptions = options;
  }
}
