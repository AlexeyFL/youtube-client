import { Injectable } from '@angular/core';
import { videoCards } from '../../app.constants';

@Injectable()
export class SearchService {
  videoCards = videoCards.slice();

  getItem() {
    return this.videoCards;
  }

  filterItem(target: string) {
    return this.videoCards.filter(
      (item) =>
        item.title.toLowerCase().indexOf(target.toLowerCase()) >= 0,
    );
  }
}
