import { Pipe, PipeTransform } from '@angular/core';
import { VideoCard } from '../../youtube/models/response-item';
import { SortingOptions } from '../../core/services/filter.service';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(arr: VideoCard[], sortingOptions: SortingOptions) {
    if (sortingOptions.isAsc) {
      return arr.sort((a: any, b: any) => {
        return a[sortingOptions.sortingValue] - b[sortingOptions.sortingValue];
      });
    }
    return arr.sort((a: any, b: any) => {
      return b[sortingOptions.sortingValue] - a[sortingOptions.sortingValue];
    });
  }
}
