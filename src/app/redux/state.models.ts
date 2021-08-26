export class CardModel implements Card {
  constructor(
    id: string = '',
    title: string = '',
    thumbnailUrl: string = '',
    publishedAt: number | string = Date.parse('2006-05-12T09:38:06Z'),
    viewCount: number = Number(0),
    likeCount: number = Number(0),
    dislikeCount: number = Number(0),
    favoriteCount: number = Number(0),
    commentCount: number = Number(0),
  ) {}
}

export interface Card {
  id?: string;
  title?: string;
  thumbnailUrl?: string;
  publishedAt?: number | string;
  viewCount?: number;
  likeCount?: number;
  dislikeCount?: number;
  favoriteCount?: number;
  commentCount?: number;
}
