import { Pipe, PipeTransform } from '@angular/core';
import { VideoCard } from '../../youtube/models/response-item';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(arr: VideoCard[], isAsc: boolean, sortingValue: string) {
    if (isAsc) {
      return arr.sort((a: any, b: any) => {
        return a[sortingValue] - b[sortingValue];
      });
    }
    return arr.sort((a: any, b: any) => {
      return b[sortingValue] - a[sortingValue];
    });
  }
}
