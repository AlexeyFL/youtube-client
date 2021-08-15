import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  // providers: [SearchService],
})
export class SearchComponent {
  inputValue: string;

  toggleSettings: boolean;

  emptyString: boolean;

  @Input() categories: [] = [];

  @Output() changeToggleSettings = new EventEmitter<boolean>();

  @Output() searchItems = new EventEmitter();

  constructor(private searchService: SearchService, private router: Router) {
    this.toggleSettings = false;
    this.inputValue = '';
    this.emptyString = false;
  }

  onSettingsButtonClick() {
    this.toggleSettings = !this.toggleSettings;
    this.changeToggleSettings.emit(this.toggleSettings);
  }

  submitSearch(val: string) {
    this.searchService.getItem();
    this.searchService.videoCards = this.searchService.filterItem(this.inputValue);
    console.log('from search cards фаеук', this.searchService.videoCards);
    this.router.navigate(['/videos'], {
      fragment: val,
    });
    // this.searchItems.emit(items);
  }
}
