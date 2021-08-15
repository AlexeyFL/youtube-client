import { Injectable } from '@angular/core';
import { VideoCard } from 'src/app/youtube/models/response-item';
import { videoCards } from '../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  videoCards: VideoCard[] = [];

  getItem() {
    this.videoCards = videoCards.slice();
    return this.videoCards;
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
