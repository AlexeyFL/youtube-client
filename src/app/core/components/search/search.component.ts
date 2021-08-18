import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  inputValue: string;

  toggleSettings: boolean;

  @Output() changeToggleSettings = new EventEmitter<boolean>();

  constructor(private searchService: SearchService, private router: Router) {
    this.toggleSettings = false;
    this.inputValue = '';
  }

  onSettingsButtonClick() {
    this.toggleSettings = !this.toggleSettings;
    this.changeToggleSettings.emit(this.toggleSettings);
  }

  submitSearch() {
    this.searchService.getItem();
    this.searchService.videoCards = this.searchService.filterItem(
      this.inputValue,
    );
  }
}
