import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
})
export class CmpBComponent implements OnInit {
  datos: Array<string>;
  datoRecibido: string;

  constructor(private _datosService: DatosService) { }

  ngOnInit() {
    this.datos = this._datosService.datos;
    // this.datoRe = this._datosService.dato;
    this._datosService.datoEmitido.subscribe((dato) => {
      this.datoRecibido = dato;
    })
  }

  add(value) {
    this._datosService.addDato(value);
  }

}
