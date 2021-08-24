import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  videoCard?: any;

  constructor(
    private route: ActivatedRoute,
    public youtubeService: YoutubeService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.youtubeService.fetchVideoById(params.id);
      this.youtubeService.fullCard$.subscribe((data) => {
        this.videoCard = data;
      });
    });
  }
}
