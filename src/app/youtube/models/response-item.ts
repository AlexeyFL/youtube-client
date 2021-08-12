type ThumbnailData = {
  url: string;
  width: number;
  height: number;
};

export interface ResponseItem {
  id: string;
  snippet: {
    title: string;
    publishedAt: string;
    thumbnails: {
      default: ThumbnailData;
      medium: ThumbnailData;
      high: ThumbnailData;
      standart: ThumbnailData;
      maxres: ThumbnailData;
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export interface VideoCard {
  title: string;
  thumbnailUrl: string;
  publishedAt: number;
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  favoriteCount: number;
  commentCount: number;
}
