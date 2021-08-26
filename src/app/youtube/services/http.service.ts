import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_FULLCARD_URL, API_URL_VIDEO } from 'src/app/app.constants';
import { ResponseDetail, ResponseDetailSearch } from '../models/response-item';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getCards(searchQuery: string): Observable<ResponseDetailSearch> {
    return this.http.get<ResponseDetailSearch>(
      `${API_URL_VIDEO}${searchQuery}`,
    );
  }

  getDetail(id: string): Observable<ResponseDetail> {
    return this.http.get<ResponseDetail>(
      `${API_FULLCARD_URL}&id=${id}&part=snippet,statistics`,
    );
  }
}
