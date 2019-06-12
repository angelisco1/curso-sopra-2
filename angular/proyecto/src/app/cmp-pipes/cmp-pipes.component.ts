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
  mascotas: Array<string> = ['gato', 'perro', 'pez'];

  constructor() { }

  ngOnInit() {
  }

}
