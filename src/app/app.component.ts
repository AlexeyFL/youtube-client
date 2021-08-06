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

  searchItems: SearchItem[] = [];

  searchString: string | null = null;

  toggleSettins: boolean = false;

  title = 'youtube-client';

  onToggleSettings(toggle: boolean) {
    this.toggleSettins = toggle;
  }

  getSearchItems(searchArr: SearchItem[]) {
    this.searchItems = searchArr;
  }

  getSearchString(searchStr: string | null) {
    this.searchString = searchStr;
    console.log(this.searchString);
  }
}
