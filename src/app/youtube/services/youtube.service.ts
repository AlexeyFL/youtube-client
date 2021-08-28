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
import { CustomCard } from '../../redux/state';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private customCards: CustomCard[] = [];

  cards$: Observable<VideoCard[]>;

  customCards$: Observable<CustomCard[]>;

  fullCard$: Observable<VideoCard | undefined>;

  private cards$$ = new BehaviorSubject<VideoCard[]>([]);

  private customCards$$ = new BehaviorSubject<CustomCard[]>([]);

  private fullCard$$ = new Subject<VideoCard | undefined>();

  constructor(private http: HttpClient, private httpService: HttpService) {
    this.cards$ = this.cards$$.asObservable();
    this.customCards$ = this.customCards$$.asObservable();
    this.fullCard$ = this.fullCard$$.asObservable();
  }

  addCustomCard(card: CustomCard) {
    this.customCards.push(card);
    this.customCards$$.next(this.customCards.slice());
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
