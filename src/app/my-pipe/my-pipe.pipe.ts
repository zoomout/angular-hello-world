import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string) {
    if (!value) {
      return null;
    }
    const skip = ['and', 'a', 'of', 'the', 'is', 'an', 'from']
    const result = value.toLowerCase()
      .split(' ')
      .map((s) => {
        return (skip.includes(s)) ? s : (s.charAt(0).toUpperCase() + s.substring(1));
      })
      .join(' ')
    return result.charAt(0).toUpperCase() + result.substring(1);
  }
}
