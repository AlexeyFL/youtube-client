import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, API_URL_VIDEO } from 'src/app/app.constants';
import { map } from 'rxjs/operators';
// import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YuotubeService {
  constructor(private http: HttpClient) {}

  videocards = [];

  onFetchData() {
    this.fetchData();
  }

  fetchData() {
    return this.http.get(API_URL_VIDEO).pipe(
      map((response: any) => {
        const videoItems = Object.values(response)[5];
        return videoItems;
      }),
    );
  }

  getStatistics(id: string) {
    this.http
      .get(`${API_URL}&id=${id}&part=statistics`)
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        }),
      )
      .subscribe((data: any) => data);
  }
}
