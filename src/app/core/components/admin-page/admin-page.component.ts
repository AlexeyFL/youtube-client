import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { getCustomCards } from 'src/app/redux/actions/actions';
import { YoutubeService } from '../../../youtube/services/youtube.service';
import { AppState, CustomCard } from '../../../redux/state';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  titleInput: string;

  descriptionInput: string;

  imageInput: string;

  linkVideoInput: string;

  constructor(
    private youtubeService: YoutubeService,
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.titleInput = '';
    this.descriptionInput = '';
    this.imageInput = '';
    this.linkVideoInput = '';
  }

  addItem() {
    const newItem: CustomCard = {
      title: this.titleInput,
      description: this.descriptionInput,
      image: this.imageInput,
      linkVideo: this.linkVideoInput,
      publish: new Date().toDateString(),
    };

    this.youtubeService.addCustomCard(newItem);

    this.store.dispatch(getCustomCards());

    this.titleInput = '';
    this.descriptionInput = '';
    this.imageInput = '';
    this.linkVideoInput = '';
    this.router.navigate(['videos']);
  }
}
