import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(mascotas: Array<string>, txtFiltro?: string): Array<string> {
    return mascotas.filter(mascota => mascota.toLowerCase().includes(txtFiltro));
  }

}
