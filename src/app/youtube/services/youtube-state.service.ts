import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YuotubeService } from './yuotube.service';

@Injectable({
  providedIn: 'root',
})
export class YoutubeStateService {
  cards$: Observable<any>;

  fullCard$: Observable<any>;

  private cards$$ = new BehaviorSubject([]);

  private fullCard$$ = new BehaviorSubject([]);

  constructor(private youtubeService: YuotubeService) {
    this.cards$ = this.cards$$.asObservable();
    this.fullCard$ = this.fullCard$$.asObservable();
  }

  initData() {
    this.youtubeService
      .fetchData()
      .pipe(
        map((items:any) =>
          items.map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnailUrl: item.snippet.thumbnails.high.url,
            publishedAt: Date.parse(item.snippet.publishedAt),
            // viewCount: Number(item.statistics.viewCount),
            // likeCount: Number(item.statistics.likeCount),
            // dislikeCount: Number(item.statistics.dislikeCount),
            // favoriteCount: Number(item.statistics.favoriteCount),
            // commentCount: Number(item.statistics.commentCount),
          }))),
      )
      .subscribe((cards: any) => {
        this.cards$$.next(cards);
      });

    this.youtubeService
      .getFullCard()
      .pipe(map((items) => items))
      .subscribe((card: any) => {
        this.fullCard$$.next(card);
      });
  }
}
