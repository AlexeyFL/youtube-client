import { Component, OnInit } from '@angular/core';

import { SearchService } from 'src/app/core/services/search.service';
import { FilterService } from 'src/app/core/services/filter.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCards } from '../../../redux/actions/actions';
import { YoutubeService } from '../../services/youtube.service';
import { VideoCard } from '../../models/response-item';
import { AppState, CustomCard } from '../../../redux/state';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.scss'],
})
export class UserCategoriesComponent implements OnInit {
  videocards!: Observable<VideoCard[]>;

  customCards!: Observable<CustomCard[]>;

  constructor(
    public searchService: SearchService,
    public filterService: FilterService,
    public youtubeService: YoutubeService,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.store.dispatch(getCards());
    this.videocards = this.store.select((state) => state.youtubeState.cards);

    // this.store.dispatch(getCards());
    this.customCards = this.store.select(
      (state) => state.youtubeState.customCards,
    );
  }
}
