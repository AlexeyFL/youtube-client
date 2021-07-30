import { SearchItem } from './models/search-item';

export const searchItem: SearchItem = {
  id: 'item_id',
  snippet: {
    title: 'Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh',
    publishedAt: '2017-09-05T16:48:15.000Z',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/k5E2AVpwsko/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/k5E2AVpwsko/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/k5E2AVpwsko/hqdefault.jpg',
        width: 480,
        height: 360,
      },
      standart: {
        url: 'https://i.ytimg.com/vi/k5E2AVpwsko/sddefault.jpg',
        width: 640,
        height: 480,
      },
      maxres: {
        url: 'https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg',
        width: 1280,
        height: 720,
      },
    },
  },
  statistics: {
    viewCount: '1266085',
    likeCount: '18342',
    dislikeCount: '473',
    favoriteCount: '0',
    commentCount: '1255',
  },
};

export const searchItems: SearchItem[] = [
  searchItem,
  searchItem,
  searchItem,
  searchItem,
];
