import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  API_URL_VIDEO,
  API_STATISTICS_URL,
  API_FULLCARD_URL,
} from 'src/app/app.constants';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class YuotubeService {
  searchString: string = '';

  fullCardId: string = 'nq4aU9gmZQk';

  constructor(private http: HttpClient) {}

  videocards = [];

  setSearchString(str: string) {
    this.searchString = str;
  }

  setFullCardId(id: string) {
    this.fullCardId = id;
  }

  fetchData() {
    return this.http.get(`${API_URL_VIDEO}${this.searchString}`).pipe(
      map((items: any) => {
        if (this.searchString === '' || this.searchString.length < 3) {
          return [];
        }
        const itemsId = items.items.map((item: any) => item.id.videoId);
        return itemsId;
      }),
      switchMap((response: any) =>
        this.http.get(
          `${API_FULLCARD_URL}&id=${response.join()}&part=snippet,statistics`,
        )),
      map((item: any) => item.items),
    );
  }

  getFullCard() {
    return this.http
      .get(`${API_FULLCARD_URL}&id=${this.fullCardId}&part=snippet,statistics`)
      .pipe(map((response: any) => response.items));
  }

  getStatistics(id: string) {
    return this.http
      .get(`${API_STATISTICS_URL}&id=${id}&part=statistics`)
      .pipe(map((data) => data));
  }
}
