import { Action, createReducer, on } from '@ngrx/store';
import * as CardActions from '../actions/actions';
import { initialState, MainState } from '../state';

const reducer = createReducer(
  initialState,
  on(CardActions.getCards, (state) => {
    console.log('state', state);
    return { ...state };
  }),
  on(CardActions.getFullCard, (state) => {
    console.log('state', state);
    return { ...state };
  }),
);

export function mainReducer(state: MainState | undefined, action: Action) {
  return reducer(state, action);
}
