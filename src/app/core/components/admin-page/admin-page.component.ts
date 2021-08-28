import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { map } from 'rxjs/operators';
import { getCustomCards } from 'src/app/redux/actions/actions';
import { YoutubeService } from '../../../youtube/services/youtube.service';
import { AppState, CustomCard } from '../../../redux/state';
// import { getCards, createCustomCard } from '../../../redux/actions/actions';

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

  customCardsUnsubscribe!: Subscription;

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
    /* const title = this.titleInput;
    const description = this.descriptionInput;
    const image = this.imageInput;
    const linkVideo = this.linkVideoInput; */

    const newItem: CustomCard = {
      title: this.titleInput,
      description: this.descriptionInput,
      image: this.imageInput,
      linkVideo: this.linkVideoInput,
      publish: new Date().toDateString(),
    };

    this.youtubeService.addCustomCard(newItem);

    this.store.dispatch(getCustomCards());

    // this.store.dispatch(createCard({...newItem}));

    /* this.customCardsUnsubscribe = this.youtubeService.customCards$
      .pipe(
        map((data: any) => {
          console.log('admin', data);
          this.store.dispatch(createCustomCard(data));
        }),
      )
      .subscribe(); */

    this.titleInput = '';
    this.descriptionInput = '';
    this.imageInput = '';
    this.linkVideoInput = '';
    this.router.navigate(['videos']);
  }

}
