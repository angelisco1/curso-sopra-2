import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {
  texto: string = "Winter is coming!"
  precio: number = 10;
  fecha: Date = new Date();
  lema: string = 'La noche se avecina, ahora empieza mi guardia. No terminará hasta el día de mi muerte. No tomaré esposa, no poseeré tierras, no engendraré hijos. No llevaré corona, no alcanzaré la gloria. Viviré y moriré en mi puesto. Soy la espada en la oscuridad. Soy el vigilante del Muro. Soy el fuego que arde contra…​';
  mascotas: Array<string> = ['gato', 'perro', 'pez'];

  msg = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('El canario está en la jaula...');
    }, 1500);
  })

  constructor() { }

  ngOnInit() {
  }

}
