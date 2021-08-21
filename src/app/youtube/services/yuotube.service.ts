import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL_VIDEO, API_STATISTICS_URL } from 'src/app/app.constants';
import { map } from 'rxjs/operators';
import { SearchService } from 'src/app/core/services/search.service';

@Injectable({
  providedIn: 'root',
})
export class YuotubeService {
  searchString: string = '';

  constructor(private http: HttpClient, private searchService: SearchService) {}

  videocards = [];

  setSearchString(str: string) {
    this.searchString = str;
  }

  fetchData() {
    return this.http.get(`${API_URL_VIDEO}${this.searchString}`).pipe(
      map((response: any) => {
        if (this.searchString === '' || this.searchString.length < 3) {
          return [];
        }
        return response.items;
      }),

      // map((items: any) => {
      //   const fullCard:any = [];
      //   items.map((item: any) => {
      //     this.getStatistics(item.id.videoId).subscribe((data: any) => {
      //       fullCard.push({ ...item, statistics: data.items[0].statistics });
      //     });
      //   });

      //   return fullCard;
      // }),
    );
  }

  getStatistics(id: string) {
    return this.http
      .get(`${API_STATISTICS_URL}&id=${id}&part=statistics`)
      .pipe(map((data) => data));
  }
}
