import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateClass',
})
export class DateClassPipe implements PipeTransform {
  transform(value: any): any {
    console.log(value);
    return null;
  }
}
