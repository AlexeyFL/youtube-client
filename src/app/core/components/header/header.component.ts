import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VideoCard } from '../../../youtube/models/response-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  toggleSettings: boolean;

  searchItems: VideoCard[] = [];

  @Input() categories: VideoCard[] = [];

  @Output() changeToggleSettings = new EventEmitter<boolean>();

  @Output() passSearchItems = new EventEmitter<VideoCard[]>();

  constructor() {
    this.toggleSettings = false;
  }

  getSearchItems(arr: VideoCard[]) {
    this.searchItems = arr.slice();
    this.passSearchItems.emit(this.searchItems);
  }

  onToggleSettings(item: boolean) {
    this.toggleSettings = item;
    this.changeToggleSettings.emit(this.toggleSettings);
  }
}
