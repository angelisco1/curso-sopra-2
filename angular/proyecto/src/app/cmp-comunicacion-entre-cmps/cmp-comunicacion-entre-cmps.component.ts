import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-comunicacion-entre-cmps',
  templateUrl: './cmp-comunicacion-entre-cmps.component.html',
  styleUrls: ['./cmp-comunicacion-entre-cmps.component.css']
})
export class CmpComunicacionEntreCmpsComponent implements OnInit {

  nombreHijo1: string = 'Paco';

  cambiarNombre(nuevoNombre) {
    this.nombreHijo1 = nuevoNombre;
  }

  constructor() { }

  ngOnInit() {
  }

}
