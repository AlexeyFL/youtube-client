import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../../../core/services/search.service';
import { VideoCard } from '../../models/response-item';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  videoCard?: VideoCard;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.videoCard = this.searchService.getItemById(params.id);
    });
  }
}
