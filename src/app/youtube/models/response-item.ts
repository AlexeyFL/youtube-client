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
export interface ResponseItemApi {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: ThumbnailData;
      medium: ThumbnailData;
      high: ThumbnailData;
      standart: ThumbnailData;
      maxres: ThumbnailData;
    };
    title: string;
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
  id: string;
  title: string;
  thumbnailUrl: string;
  publishedAt: number;
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  favoriteCount: number;
  commentCount: number;
}
