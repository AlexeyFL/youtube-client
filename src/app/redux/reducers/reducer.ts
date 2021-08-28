import { Action, createReducer, on } from '@ngrx/store';
import * as CardActions from '../actions/actions';
import { initialState, YoutubeState } from '../state';

const reducer = createReducer(
  initialState,
  on(CardActions.getCards, (state) => ({ ...state, loading: true })),
  on(CardActions.getCardSuccesful, (state, { cards }) => ({ ...state, cards })),
  on(CardActions.getCardFailed, (state, { error }) => ({ ...state, error })),

  on(CardActions.getCustomCards, (state) => ({ ...state, loading: true })),
  on(CardActions.getCustomCardsSuccesful, (state, { customCards }) => ({
    ...state,
    customCards: [...customCards],
  })),
  on(CardActions.getCustomCardsFailed, (state, { error }) => ({
    ...state,
    error,
  })),

  /* on(CardActions.getCustomCard, (state, { card }) => {
    console.log('state', state.customCards);
    console.log('action rrrr', card);
    return { ...state, customCards: state.customCards.push(card) };
  }), */
);

export function youtubeReducer(state: YoutubeState, action: Action) {
  return reducer(state, action);
}
