import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "hex" })
export class hexPipe implements PipeTransform {
  transform(value: string) {
    if (!value) {
      return value;
    }
    return `#${parseInt(value).toString(16)}`;
  }
}
