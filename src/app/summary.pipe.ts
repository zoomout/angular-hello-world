import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  defaultLimit = 50;

  transform(value: string, limit?: number) {
    if (!value) {
      return null;
    }
    return value.substr(0, (limit) ? limit : this.defaultLimit) + '...';
  }
}
