import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() categories: [] = [];

  @Output() changeToggleSettings = new EventEmitter<boolean>();

  @Output() searchItems = new EventEmitter();

  constructor(private searchService: SearchService) {
    this.toggleSettings = false;
    this.inputValue = '';
    this.emptyString = false;
  }

  onSettingsButtonClick() {
    this.toggleSettings = !this.toggleSettings;
    this.changeToggleSettings.emit(this.toggleSettings);
  }

  submitSearch() {
    if (this.inputValue === '') {
      return;
    }
    const items = this.searchService.filterItem(this.inputValue);
    this.searchItems.emit(items);

    this.inputValue = '';
  }
}
