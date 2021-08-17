import { Component, OnInit } from '@angular/core';

import { SearchService } from 'src/app/core/services/search.service';
import { FilterService } from 'src/app/core/services/filter.service';
import { YuotubeService } from '../../services/yuotube.service';

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
  ) {}

  ngOnInit() {
    this.youtubeService.fetchData().subscribe((data) => {
      this.videocards = data;
      console.log('data', this.videocards);
      this.videocards.map((item:any) => {
        console.log(item);
      });
    });
  }
}
