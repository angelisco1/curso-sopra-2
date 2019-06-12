import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number | string, args?: number | string, arg2?: number | string): number | string {
    let res: number | string;
    if (typeof(value) == 'number') {
      res = value * 2;
      if (args && typeof(args) == 'number') {
        res -= args;
      }
      if (arg2 && typeof(arg2) == 'number') {
        res += arg2;
      }
    } else {
      res = value.repeat(2);
      if (args && typeof(args) == 'string') {
        let regExp = new RegExp(args, 'g');
        // let regExp = new RegExp(args);
        res = res.replace(regExp, '_');
      }
      if (arg2 && typeof(arg2) == 'string') {
        res += arg2;
      }
    }
    return res;
  }

}
