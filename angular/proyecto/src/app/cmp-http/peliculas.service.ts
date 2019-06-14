import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genero } from './genero';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  URL_PELICULAS = 'https://ejemplos-dc1c1.firebaseio.com/peliculas';
  URL_GENEROS = 'https://ejemplos-dc1c1.firebaseio.com/generos';

  constructor(private http: HttpClient) { }

  getPeliculasPorGenero(genero) {

  }

  getGeneros() {
    return this.http.get(`${this.URL_GENEROS}.json`)
      .pipe(
        map((datos) => {
          let generos = [];
          for (let id in datos) {
            generos.push(new Genero(id, datos[id]));
          }
          return generos;
        })
      );
  }

  // new Promise((resolve, reject) => {
  //   resolve('Hola'),
  // }).then((txt) => {

  // })

  savePelicula(genero, pelicula) {

  }

}