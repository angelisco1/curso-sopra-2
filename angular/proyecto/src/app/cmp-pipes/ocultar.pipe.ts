import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: string, palabras: Array<string>, sustituto: string = '*'): string {
    let res = value;
    for (let palabra of palabras) {
      let reg = new RegExp(palabra, 'gi');
      res = res.replace(reg, sustituto.repeat(palabra.length));
    }
    return res;
  }

}
