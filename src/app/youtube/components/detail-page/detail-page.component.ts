import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { YoutubeStateService } from '../../services/youtube-state.service';
import { YuotubeService } from '../../services/yuotube.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit, OnDestroy {
  videoCard?: any;

  constructor(
    private route: ActivatedRoute,
    public youtubeStateService: YoutubeStateService,
    public yuotubeService: YuotubeService,
  ) {}

  ngOnInit(): void {
    this.youtubeStateService.initData();
    this.route.params.subscribe((params: Params) => {
      this.yuotubeService.setFullCardId(params.id);
      this.youtubeStateService.fullCard$
        .pipe(
          map((item: any) => ({
            id: item[0].id,
            title: item[0].snippet.title,
            thumbnailUrl: item[0].snippet.thumbnails.high.url,
            publishedAt: Date.parse(item[0].snippet.publishedAt),
            viewCount: Number(item[0].statistics.viewCount),
            likeCount: Number(item[0].statistics.likeCount),
            dislikeCount: Number(item[0].statistics.dislikeCount),
            favoriteCount: Number(item[0].statistics.favoriteCount),
            commentCount: Number(item[0].statistics.commentCount),
          })),
        )
        .subscribe((data) => {
          this.videoCard = data;
        });
    });
  }

  ngOnDestroy() {}
}
