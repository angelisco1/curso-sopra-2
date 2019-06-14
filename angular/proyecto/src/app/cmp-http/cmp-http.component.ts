import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './peliculas.service';
import { Genero } from './genero';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
  generos: Array<any> = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.peliculasService.getGeneros().subscribe(
      (datos) => {
        this.generos = datos;

        // console.log(datos);
        // let generos = [];
        // for (let id in datos) {
        //   generos.push(new Genero(id, datos[id]));
        // }
      }
    );
  }

}
