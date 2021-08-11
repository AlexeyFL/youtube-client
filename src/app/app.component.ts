import { Component } from '@angular/core';
import { items } from './app.constants';
import { SearchItem } from './models/search-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = items;

  searchingItems: SearchItem[] = [];

  searchingString: string | null = null;

  togglingSettings: boolean = false;

  title = 'youtube-client';

  onToggleSettings(toggle: boolean) {
    this.togglingSettings = toggle;
  }

  getSearchItems(searchArr: SearchItem[]) {
    this.searchingItems = searchArr;
  }

  getSearchString(searchStr: string | null) {
    this.searchingString = searchStr;
  }
}
