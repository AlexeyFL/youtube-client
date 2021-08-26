import { createAction, props } from '@ngrx/store';
import { Card } from '../state.models';

export const getCards = createAction('[CATEGORIES PAGE] GET ALL CARDS');

export const getFullCard = createAction(
  '[DETAIL PAGE] GET FULL CARD',
  props<{ cardId: number }>(),
);

export const createCard = createAction(
  '[ADMIN PAGE] GET FULL CARD',
  props<{ card: Card }>(),
);
