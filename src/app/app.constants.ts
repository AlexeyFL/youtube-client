import { ResponseItem } from './youtube/models/response-item';

const API_KEY = 'AIzaSyBtjJ6UQxp0owpKQXwb4uFXGCKKlj2dvvI';

const API_FULLCARD_URL = `videos?key=${API_KEY}`;
const API_STATISTICS_URL = `videos?key=${API_KEY}`;
const API_URL_VIDEO = `search?key=${API_KEY}&type=video&part=snippet&maxResults=10&q=`;

const toResponse = (item: ResponseItem) => ({
  id: item.id,
  title: item.snippet.title,
  thumbnailUrl: item.snippet.thumbnails.high.url,
  publishedAt: Date.parse(item.snippet.publishedAt),
  viewCount: Number(item.statistics.viewCount),
  likeCount: Number(item.statistics.likeCount),
  dislikeCount: Number(item.statistics.dislikeCount),
  favoriteCount: Number(item.statistics.favoriteCount),
  commentCount: Number(item.statistics.commentCount),
});

export { toResponse, API_FULLCARD_URL, API_URL_VIDEO, API_STATISTICS_URL };
