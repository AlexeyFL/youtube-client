import { createAction, props } from '@ngrx/store';
import { VideoCard } from '../../youtube/models/response-item';

export const getCards = createAction('[CATEGORIES PAGE] GET ALL CARDS');

export const getCardSuccesful = createAction(
  '[CARD EFFECT] SET FETCHED CARDS',
  props<{ cards: VideoCard[] }>(),
);

export const getCardFailed = createAction(
  '[CARD EFFECT] FETCHED CARDS FAILED',
  props<{ error: Error }>(),
);

export const getFullCard = createAction(
  '[DETAIL PAGE] GET CARDS',
  props<{ cardId: number }>(),
);

export const createCard = createAction(
  '[ADMIN PAGE] GET FULL CARD',
  props<{ card: VideoCard }>(),
);
