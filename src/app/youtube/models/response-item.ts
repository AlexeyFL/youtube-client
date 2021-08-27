type ThumbnailData = {
  url: string;
  width: number;
  height: number;
};

export interface ResponseDetail {
  kind: string;
  etag: string;
  items: ResponseItem[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
export interface ResponseDetailSearch {
  kind: string;
  etag: string;
  items: ResponseItemSearch[];
  pageInfo?: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface ResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ThumbnailData;
      medium: ThumbnailData;
      high: ThumbnailData;
      standart: ThumbnailData;
      maxres: ThumbnailData;
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
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
export interface ResponseItemSearch {
  kind: string;
  etag: string;
  id: {
    videoId: string;
  };
  snippet: {
    channelId?: string;
    channelTitle?: string;
    description: string;
    liveBroadcastContent?: string;
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
  description?: string;
  image?: string;
  linkVideo?: string;
}
