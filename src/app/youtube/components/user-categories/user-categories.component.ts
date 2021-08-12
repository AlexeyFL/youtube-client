import { Component, Input } from '@angular/core';

import { VideoCard } from '../../models/response-item';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.scss'],
})
export class UserCategoriesComponent {
  @Input() categories: VideoCard[];

  @Input() searchString: string | null;

  @Input() sortingValue: string = '';

  @Input() sortingOrder: boolean = true;

  constructor() {
    this.categories = [];
    this.searchString = null;
  }
}
