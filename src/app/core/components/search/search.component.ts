import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { tap, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { YoutubeStateService } from '../../../youtube/services/youtube-state.service';
import { YuotubeService } from '../../../youtube/services/yuotube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit, OnDestroy {
  private inputStream!: Subscription;

  @ViewChild('searchInput') searchingInput?: ElementRef;

  inputValue: string;

  toggleSettings: boolean;

  @Output() changeToggleSettings = new EventEmitter<boolean>();

  constructor(
    private youtubeState: YoutubeStateService,
    private youtubeService: YuotubeService,
  ) {
    this.toggleSettings = false;
    this.inputValue = '';
  }

  ngAfterViewInit() {
    this.inputStream = fromEvent(this.searchingInput?.nativeElement, 'input')
      .pipe(
        map((e: any) => e.target.value),
        debounceTime(1500),
        distinctUntilChanged(),
        tap((event: any) => {
          this.youtubeService.setSearchString(event);
          this.youtubeState.initData();
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.inputStream.unsubscribe();
  }

  onSettingsButtonClick() {
    this.toggleSettings = !this.toggleSettings;
    this.changeToggleSettings.emit(this.toggleSettings);
  }

  // submitSearch() {
  //   this.searchService.getItem();
  //   this.searchService.videoCards = this.searchService.filterItem(
  //     this.inputValue,
  //   );
  // }
}
