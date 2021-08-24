import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  API_URL_VIDEO,
  API_FULLCARD_URL,
  toResponse,
} from 'src/app/app.constants';
import { map, switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import {
  VideoCard,
} from '../models/response-item';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  cards$: Observable<VideoCard[]>;

  fullCard$: Observable<VideoCard[]>;

  private cards$$ = new BehaviorSubject<VideoCard[]>([]);

  private fullCard$$ = new BehaviorSubject<VideoCard[]>([]);

  constructor(private http: HttpClient) {
    this.cards$ = this.cards$$.asObservable();
    this.fullCard$ = this.fullCard$$.asObservable();
  }

  fetchVideoList(searchQuery: string) {
    return this.http
      .get(`${API_URL_VIDEO}${searchQuery}`)
      .pipe(
        map((items: any) => {
          const itemsId = items.items.map((item: any) => item.id.videoId);
          return itemsId;
        }),
        switchMap((response) =>
          this.http.get(
            `${API_FULLCARD_URL}&id=${response.join()}&part=snippet,statistics`,
          )),
        map((item: any) => item.items.map((card: any) => toResponse(card))),
      )
      .subscribe((data) => {
        this.cards$$.next(data);
      });
  }

  fetchVideoById(id: string) {
    return this.http
      .get(`${API_FULLCARD_URL}&id=${id}&part=snippet,statistics`)
      .pipe(map((response: any) => toResponse(response.items[0])))
      .subscribe((data: any) => {
        this.fullCard$$.next(data);
      });
  }
}
