import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchItem } from '../../models/search-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  toggleSettings: boolean;

  searchItems: SearchItem[] = [];

  @Input() categories: SearchItem[] = [];

  @Output() changeToggleSettings = new EventEmitter<boolean>();

  @Output() passSearchItems = new EventEmitter<SearchItem[]>();

  constructor() {
    this.toggleSettings = false;
  }

  getSearchItems(arr: SearchItem[]) {
    this.searchItems = arr.slice();
    this.passSearchItems.emit(this.searchItems);
  }

  onToggleSettings(item: boolean) {
    this.toggleSettings = item;
    this.changeToggleSettings.emit(this.toggleSettings);
  }
}
