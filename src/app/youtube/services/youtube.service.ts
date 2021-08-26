import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_FULLCARD_URL, toResponse } from 'src/app/app.constants';
import { map, switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import {
  ResponseDetail,
  ResponseItem,
  ResponseItemSearch,
  ResponseDetailSearch,
  VideoCard,
} from '../models/response-item';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  cards$: Observable<VideoCard[]>;

  fullCard$: Observable<VideoCard | undefined>;

  private cards$$ = new BehaviorSubject<VideoCard[]>([]);

  private fullCard$$ = new Subject<VideoCard | undefined>();

  constructor(private http: HttpClient, private httpService: HttpService) {
    this.cards$ = this.cards$$.asObservable();
    this.fullCard$ = this.fullCard$$.asObservable();
  }

  fetchVideoList(searchQuery: string) {
    this.httpService
      .getCards(searchQuery)
      .pipe(
        map((items: ResponseDetailSearch) => {
          const itemsId = items.items.map(
            (item: ResponseItemSearch) => item.id.videoId,
          );
          return itemsId;
        }),
        switchMap((response) =>
          this.http.get<ResponseDetail>(
            `${API_FULLCARD_URL}&id=${response.join()}&part=snippet,statistics`,
          ),
        ),
        map((item: ResponseDetail) =>
          item.items.map((card: ResponseItem) => toResponse(card)),
        ),
      )
      .subscribe((data) => {
        this.cards$$.next(data);
      });
  }

  fetchVideoById(id: string) {
    this.httpService
      .getDetail(id)
      .pipe(map((response: ResponseDetail) => toResponse(response.items[0])))
      .subscribe((data: VideoCard) => {
        this.fullCard$$.next(data);
      });
  }
}
