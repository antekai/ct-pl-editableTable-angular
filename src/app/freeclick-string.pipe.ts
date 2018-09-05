import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'freeclickString'
})
export class FreeclickStringPipe implements PipeTransform {
  transform(value: boolean): any {
    return value ? 'true' : 'false';
  }
}
