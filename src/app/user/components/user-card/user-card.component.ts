import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../../models/search-item';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() category?: SearchItem;

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    /* if (this.category) {
      const publish = this.category.snippet.publishedAt;
      if (publish) {
        console.log('category', Date.parse(publish));
      }
    } */
  }
}
