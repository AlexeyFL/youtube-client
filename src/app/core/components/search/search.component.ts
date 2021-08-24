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
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { YoutubeService } from '../../../youtube/services/youtube.service';

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

  constructor(private youtubeService: YoutubeService) {
    this.toggleSettings = false;
    this.inputValue = '';
  }

  ngAfterViewInit() {
    this.getSearchString();
  }

  getSearchString() {
    this.inputStream = fromEvent(this.searchingInput?.nativeElement, 'input')
      .pipe(
        map((e: any) => e.target.value),
        debounceTime(1500),
        distinctUntilChanged(),
      )
      .subscribe((inputValue) => {
        if (inputValue === '' || inputValue.length < 3) {
          return;
        }
        this.youtubeService.fetchVideoList(inputValue);
      });
  }

  ngOnDestroy() {
    this.inputStream.unsubscribe();
  }

  onSettingsButtonClick() {
    this.toggleSettings = !this.toggleSettings;
    this.changeToggleSettings.emit(this.toggleSettings);
  }
}
