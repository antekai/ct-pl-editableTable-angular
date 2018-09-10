import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'campEuro'
})
export class CampEuroPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return `€ ${value}`;
  }

}
