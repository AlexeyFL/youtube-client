import { Card } from './state.models';

export interface MainState {
  cards: Card[];
}

export const initialState: MainState = {
  cards: [
    {
      id: 'nq4aU9gmZQk',
      title: 'JS- Ice Cream',
      thumbnailUrl: 'https://i.ytimg.com/vi/nq4aU9gmZQk/hqdefault.jpg',
      publishedAt: 12121212,
      viewCount: 0,
      likeCount: 0,
      dislikeCount: 0,
      commentCount: 0,
    },
  ],
};
