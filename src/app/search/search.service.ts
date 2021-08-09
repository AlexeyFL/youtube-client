import { Injectable } from '@angular/core';
import { items } from '../app.constants';

@Injectable()
export class SearchService {
  items = items.slice();

  getItem() {
    return this.items;
  }

  filterItem(target: string) {
    return this.items.filter(
      (item) =>
        item.snippet.title.toLowerCase().indexOf(target.toLowerCase()) >= 0,
    );
  }
}
