import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from 'src/app/core/services/search.service';
import { FilterService } from 'src/app/core/services/filter.service';
import { VideoCard } from '../../models/response-item';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.scss'],
})
export class UserCategoriesComponent implements OnInit {
  @Input() categories: VideoCard[];

  @Input() searchString: string | null;

  @Input() sortingValue: string = '';

  @Input() sortingOrder: boolean = true;

  constructor(
    private route: ActivatedRoute,
    public searchService: SearchService,
    public filterService: FilterService,
  ) {
    this.categories = [];
    this.searchString = null;
  }

  ngOnInit() {
    console.log('videoCards', this.searchService.videoCards);
    /* // this.categories = this.serchService.videoCards;
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment || fragment === '') {
        this.categories = this.searchService.videoCards;
        this.searchString = fragment;
      }
    });
    if (this.searchString) {
      this.searchService.filterItem(this.searchString!);
    } */
  }
}
