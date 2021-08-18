import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoCard } from '../../models/response-item';

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

  @Input() category?: VideoCard;

  constructor(private router: Router) {
    this.lessWeek = false;
    this.lessMonth = false;
    this.moreHalfYear = false;
  }

  ngOnInit(): void {
    if (this.category) {
      this.checkDate(this.category);
    }
  }

  checkDate(arr: VideoCard): void {
    const DAY_MILLISECONDS = 86400000;
    const WEEK = 7;
    const MONTH = 31;
    const HALFYEAR = 180;
    const dateNow = new Date();
    const dateNowMilliseconds = Date.parse(dateNow.toISOString());

    const itemDate = arr.publishedAt;

    const difference = Math.round(
      Math.abs(dateNowMilliseconds - itemDate) / DAY_MILLISECONDS,
    );

    if (difference < WEEK) {
      this.lessWeek = true;
    }
    if (difference > WEEK && difference < MONTH) {
      this.lessMonth = true;
    }
    if (difference > HALFYEAR) {
      this.moreHalfYear = true;
    }

    this.currentClasses = {
      red: this.lessWeek,
      green: this.lessMonth,
      blue: this.moreHalfYear,
    };
  }
}
