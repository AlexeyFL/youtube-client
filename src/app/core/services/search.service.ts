import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VideoCard } from 'src/app/youtube/models/response-item';
// import { videoCards } from '../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  videoCards: VideoCard[] = [];

  searchString$: Observable<string>;

  private searchString$$ = new BehaviorSubject('');

  constructor() {
    this.searchString$ = this.searchString$$.asObservable();
  }

  getSearchString(searchString: string) {
    this.searchString$$.next(searchString);
  }

  filterItem(target: string) {
    return this.videoCards.filter(
      (item) => item.title.toLowerCase().indexOf(target.toLowerCase()) >= 0,
    );
  }

  getItemById(id: string) {
    return this.videoCards.find((item) => item.id === id);
  }
}
