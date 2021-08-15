import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  togglingSettings: boolean;

  searchItems = [];

  @Output() changeToggleSettings = new EventEmitter<boolean>();

  @Output() passSearchItems = new EventEmitter();

  constructor() {
    this.togglingSettings = false;
  }

  getSearchItems(arr: []) {
    this.searchItems = arr.slice();
    this.passSearchItems.emit(this.searchItems);
  }

  onToggleSettings(item: boolean) {
    this.togglingSettings = item;
  }
}
