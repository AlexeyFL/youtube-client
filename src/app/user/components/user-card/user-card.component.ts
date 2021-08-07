import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../../models/search-item';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  currentClasses: Record<string, boolean> = {};

  lessWeek: boolean;

  lessMonth: boolean;

  moreHalfYear: boolean;

  @Input() category?: SearchItem;

  constructor() {
    this.lessWeek = false;
    this.lessMonth = false;
    this.moreHalfYear = false;
  }

  ngOnInit(): void {
    if (this.category) {
      this.checkDate(this.category);
    }
  }

  checkDate(arr: SearchItem): void {
    const dayInMilliseconds = 86400000;
    const dateNow = new Date();
    const dateNowMilliseconds = Date.parse(dateNow.toISOString());

    const itemDate = Date.parse(arr.snippet.publishedAt);

    const difference = Math.round(
      Math.abs(dateNowMilliseconds - itemDate) / dayInMilliseconds,
    );

    if (difference < 7) {
      this.lessWeek = true;
    }
    if (difference > 7 && difference < 31) {
      this.lessMonth = true;
    }
    if (difference > 180) {
      this.moreHalfYear = true;
    }

    this.currentClasses = {
      red: this.lessWeek,
      green: this.lessMonth,
      blue: this.moreHalfYear,
    };
  }
}
