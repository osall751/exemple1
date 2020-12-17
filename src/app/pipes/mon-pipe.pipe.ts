import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monPipe'
})
export class MonPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let str=value+" "+args.join(" ");
    str=str.toLowerCase().replace("a","");
    return str;
  }

}
