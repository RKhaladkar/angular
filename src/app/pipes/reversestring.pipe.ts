import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversestring'
})
export class ReversestringPipe implements PipeTransform {
revValue:string='';
  transform(value: string, ...args: any[]): any {
    this.revValue = value.split('').reverse().join('');
    return this.revValue;
  }
}
