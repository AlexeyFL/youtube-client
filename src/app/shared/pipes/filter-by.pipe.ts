import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(array: any, searchString: string | null): any {
    if (array.length === 0) {
      return array;
    }

    return array.filter((item: any) => {
      return (
        item.snippet.title.toLowerCase().indexOf(searchString!.toLowerCase()) >=
        0
      );
    });
  }
}
