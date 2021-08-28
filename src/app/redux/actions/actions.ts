import { createAction, props } from '@ngrx/store';
import { VideoCard } from '../../youtube/models/response-item';
import { CustomCard } from '../state';

export const getCards = createAction('[CATEGORIES PAGE] GET ALL CARDS');

export const getCardSuccesful = createAction(
  '[CARD EFFECT] SET FETCHED CARDS',
  props<{ cards: VideoCard[] }>(),
);

export const getCardFailed = createAction(
  '[CARD EFFECT] FETCHED CARDS FAILED',
  props<{ error: Error }>(),
);

export const getCustomCards = createAction('[ADMIN PAGE] GET ALL CUSTOMCARDS');

export const getCustomCardsSuccesful = createAction(
  '[CARD EFFECT] SET FETCHED CUSTOMCARDS',
  props<{ customCards: CustomCard[] }>(),
);

export const getCustomCardsFailed = createAction(
  '[CARD EFFECT] FETCHED CUSTOMCARDS FAILED',
  props<{ error: Error }>(),
);
