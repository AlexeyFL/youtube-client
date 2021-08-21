import { Component, OnInit } from '@angular/core';

import { SearchService } from 'src/app/core/services/search.service';
import { FilterService } from 'src/app/core/services/filter.service';
import { YuotubeService } from '../../services/yuotube.service';
import { YoutubeStateService } from '../../services/youtube-state.service';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.scss'],
})
export class UserCategoriesComponent implements OnInit {
  videocards: any = [];

  constructor(
    public searchService: SearchService,
    public filterService: FilterService,
    public youtubeService: YuotubeService,
    public youtubeState: YoutubeStateService,
  ) {}

  ngOnInit() {
    this.youtubeState.initData();
  }
}
