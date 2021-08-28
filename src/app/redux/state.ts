import { VideoCard } from '../youtube/models/response-item';

export interface AppState {
  youtubeState: YoutubeState;
}

export interface YoutubeState {
  cards: VideoCard[];
  customCards?: CustomCard[];
  loading: boolean;
  loaded: boolean;
  error: Error;
}

export interface CustomCard {
  title: string;
  description: string;
  image: string;
  linkVideo: string;
  publish: string
}

export const initialState: YoutubeState = {
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
      favoriteCount: 0,
    },
  ],
  customCards: [],
  loading: false,
  loaded: false,
  error: null,
};
