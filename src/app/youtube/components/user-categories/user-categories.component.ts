import { Component } from '@angular/core';

import { SearchService } from 'src/app/core/services/search.service';
import { FilterService } from 'src/app/core/services/filter.service';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.scss'],
})
export class UserCategoriesComponent {
  constructor(
    public searchService: SearchService,
    public filterService: FilterService,
  ) {}
}
