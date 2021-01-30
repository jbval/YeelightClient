import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'onOff' })
export class onOffPipe implements PipeTransform {
  transform(value: string) {
    return value === 'on' ? true : false;
  }
}
