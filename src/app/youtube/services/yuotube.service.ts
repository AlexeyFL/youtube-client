import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export class YuotubeService {
  getData() {
    return fetch(API_URL)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}
