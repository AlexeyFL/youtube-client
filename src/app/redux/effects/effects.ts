import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
import { YoutubeService } from '../../youtube/services/youtube.service';
import { getCards, getCardSuccesful, getCardFailed } from '../actions/actions';

@Injectable()
export class YuotubeEffects {
  constructor(
    private actions: Actions,
    private yuotubeService: YoutubeService,
  ) {}

  getCards: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(getCards),
      switchMap(() =>
        this.yuotubeService.cards$.pipe(
          map((cards) => getCardSuccesful({ cards })),
          catchError((error) => of(getCardFailed({ error }))),
        ),
      ),
    ),
  );
}
