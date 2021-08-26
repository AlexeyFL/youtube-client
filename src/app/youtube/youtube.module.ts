import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import * as fromYoutubeReducer from '../redux/reducers/reducer';

import { UserCategoriesComponent } from './components/user-categories/user-categories.component';
import { UserCardComponent } from './components/user-card/user-card.component';

import { ShortenPipe } from '../shared/pipes/shorten.pipe';
import { FilterByPipe } from '../shared/pipes/filter-by.pipe';
import { SortByPipe } from '../shared/pipes/sort-by.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { DetailPageComponent } from './components/detail-page/detail-page.component';

@NgModule({
  declarations: [
    UserCategoriesComponent,
    UserCardComponent,
    ShortenPipe,
    FilterByPipe,
    SortByPipe,
    DetailPageComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forFeature('yuotubeStore', fromYoutubeReducer.mainReducer),
  ],
  exports: [UserCategoriesComponent],
})
export class YoutubeModule {}
