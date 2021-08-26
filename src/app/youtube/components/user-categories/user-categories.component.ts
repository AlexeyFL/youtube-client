import { Component, OnInit } from '@angular/core';

import { SearchService } from 'src/app/core/services/search.service';
import { FilterService } from 'src/app/core/services/filter.service';
import { YoutubeService } from '../../services/youtube.service';
import { VideoCard } from '../../models/response-item';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.scss'],
})
export class UserCategoriesComponent implements OnInit {
  videocards: VideoCard[] = [];

  constructor(
    public searchService: SearchService,
    public filterService: FilterService,
    public youtubeService: YoutubeService,
  ) {}

  ngOnInit() {
    this.youtubeService.cards$.subscribe((data: VideoCard[]) => {
      this.videocards = data;
    });
  }
}
