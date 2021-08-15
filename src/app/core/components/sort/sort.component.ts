/* eslint-disable operator-linebreak */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VideoCard } from '../../../youtube/models/response-item';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  @Input() categories: VideoCard[];

  @Output() searchString = new EventEmitter<string | null>();

  @Output() filteringItems = new EventEmitter();

  @Output() sortingValue = new EventEmitter();

  @Output() sortOrder = new EventEmitter();

  inputValue: string | null;

  isAsc: boolean;

  constructor(private filterService: FilterService) {
    this.categories = [];
    this.inputValue = null;
    this.isAsc = true;
  }

  passSearchString(e: Event) {
    this.filterService.setFilteringString((e.target as HTMLInputElement).value);
  }

  sortBy(sortingValue: string) {
    this.isAsc = !this.isAsc;
    this.sortingValue.emit(sortingValue);
    this.sortOrder.emit(this.isAsc);
    const options = {
      isAsc: this.isAsc,
      sortingValue,
    };
    console.log('this.isAsc', options);
    this.filterService.setSortingOptions(options);
  }
}
