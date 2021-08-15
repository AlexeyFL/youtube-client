/* eslint-disable operator-linebreak */
import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  inputValue: string | null;

  isAsc: boolean;

  constructor(private filterService: FilterService) {
    this.inputValue = null;
    this.isAsc = true;
  }

  passSearchString(e: Event) {
    this.filterService.setFilteringString((e.target as HTMLInputElement).value);
  }

  sortBy(sortingValue: string) {
    this.isAsc = !this.isAsc;
    const options = {
      isAsc: this.isAsc,
      sortingValue,
    };
    this.filterService.setSortingOptions(options);
  }
}
