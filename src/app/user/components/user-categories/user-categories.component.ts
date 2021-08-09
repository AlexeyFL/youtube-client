import { Component, Input } from '@angular/core';

import { SearchItem } from '../../../models/search-item';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.scss'],
})
export class UserCategoriesComponent {
  @Input() categories: SearchItem[];

  @Input() searchString: string | null;

  constructor() {
    this.categories = [];
    this.searchString = null;
  }
}
