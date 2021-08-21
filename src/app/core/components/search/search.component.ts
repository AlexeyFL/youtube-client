import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { YoutubeStateService } from '../../../youtube/services/youtube-state.service';
import { SearchService } from '../../services/search.service';
import { YuotubeService } from '../../../youtube/services/yuotube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchInput', { static: false }) searchingInput?: ElementRef;

  inputValue: string;

  toggleSettings: boolean;

  @Output() changeToggleSettings = new EventEmitter<boolean>();

  constructor(
    private searchService: SearchService,
    private youtubeState: YoutubeStateService,
    private youtubeService: YuotubeService,
  ) {
    this.toggleSettings = false;
    this.inputValue = '';
  }

  ngAfterViewInit() {
    const inputStream$ = fromEvent(this.searchingInput?.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        debounceTime(3000),
        distinctUntilChanged(),
        tap((event: any) => {
          this.youtubeService.setSearchString(event);
          this.youtubeState.initData();
        }),
      )
      .subscribe();
  }

  onSettingsButtonClick() {
    this.toggleSettings = !this.toggleSettings;
    this.changeToggleSettings.emit(this.toggleSettings);
  }

  passSearchString(e: Event) {
    this.searchService.getSearchString((e.target as HTMLInputElement).value);
  }

  // submitSearch() {
  //   this.searchService.getItem();
  //   this.searchService.videoCards = this.searchService.filterItem(
  //     this.inputValue,
  //   );
  // }
}
