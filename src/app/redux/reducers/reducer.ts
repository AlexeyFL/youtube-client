import { Action, createReducer, on } from '@ngrx/store';
import * as CardActions from '../actions/actions';
import { initialState, YoutubeState } from '../state';

const reducer = createReducer(
  initialState,
  on(CardActions.getCards, (state) => {
    console.log('state getCards', state);
    return { ...state, loading: true };
  }),
  on(CardActions.getCardSuccesful, (state, { cards }) => {
    console.log('state getCardSuccesful', state);
    return { ...state, cards };
  }),
  on(CardActions.getCardFailed, (state, { error }) => {
    console.log('state getCardFailed', state);
    return { ...state, error };
  }),
  on(CardActions.getFullCard, (state) => {
    console.log('state', state);
    return { ...state };
  }),
);

export function youtubeReducer(state: YoutubeState, action: Action) {
  return reducer(state, action);
}
