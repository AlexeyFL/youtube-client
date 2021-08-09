import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchItem } from '../../models/search-item';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService],
})
export class SearchComponent {
  inputValue: string;

  toggleSettings: boolean;

  emptyString: boolean;

  @Input() categories: SearchItem[] = [];

  @Output() changeToggleSettings = new EventEmitter<boolean>();

  @Output() searchItems = new EventEmitter<SearchItem[]>();

  constructor(private searchService: SearchService) {
    this.toggleSettings = false;
    this.inputValue = '';
    this.emptyString = false;
  }

  onToggleSettings() {
    this.toggleSettings = !this.toggleSettings;
    this.changeToggleSettings.emit(this.toggleSettings);
  }

  onSearchSubmit() {
    if (this.inputValue === '') {
      return;
    }
    const items: SearchItem[] = this.searchService.filterItem(this.inputValue);
    this.searchItems.emit(items);

    this.inputValue = '';
  }
}
