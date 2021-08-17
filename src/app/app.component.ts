import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchingItems: [] = [];

  sortingValue: string = '';

  sortingOrder: boolean = true;

  searchingString: string | null = null;

  togglingSettings: boolean = false;

  title = 'youtube-client';

  onToggleSettings(toggle: boolean) {
    this.togglingSettings = toggle;
  }

  onSearchItemsChange(searchArr: []) {
    this.searchingItems = searchArr;
  }

  onSearchString(searchStr: string | null) {
    this.searchingString = searchStr;
  }

  onSortingValue(value: string) {
    this.sortingValue = value;
  }

  onSortOrder(value: boolean) {
    this.sortingOrder = value;
  }
}
