import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SuitColorized',
})
export class SuitColorizedPipe implements PipeTransform {
  transform(suit: string): unknown {
    if (['♦', '♥'].includes(suit)) {
      return 'red-suit';
    }
    return 'black-suit';
  }
}
