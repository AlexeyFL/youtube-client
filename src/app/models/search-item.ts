type ThumbnailData = {
  url: string;
  width: number;
  height: number;
};

export interface SearchItem {
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
