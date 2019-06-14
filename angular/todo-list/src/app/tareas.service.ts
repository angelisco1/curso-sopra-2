import { Injectable, EventEmitter } from '@angular/core';
import { Tarea } from './tarea';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  // private _tareas: Array<Tarea> = [
  //   new Tarea('1', 'Tarea 1', false),
  //   new Tarea('2', 'Tarea 2', false),
  // ];
  contId: number = 3;
  // tareasCambiadas = new EventEmitter<Array<Tarea>>();
  tareasCambiadas = new EventEmitter<any>();
  URL_TAREAS: string = 'https://todo-list-603ba.firebaseio.com/mis-tareas';

  constructor(private http: HttpClient) { }

  useId() {
    let id = this.contId+'';
    this.contId++;
    return id;
  }

  get tareas(): Observable<any> {
    // return this._tareas;
    return this.http.get(`${this.URL_TAREAS}.json`)
      .pipe(
        map(datos => {
          let arrayTareas = [];
          for (let id in datos) {
            arrayTareas.push(new Tarea(id, datos[id].nombre, datos[id].completa));
          }
          return arrayTareas;
        })
      )
  }

  addTarea(tarea: any) {
    // this._tareas.push(tarea);
    return this.http.post(`${this.URL_TAREAS}.json`, tarea);
  }

  deleteTarea(id: string) {
    return this.http.delete(`${this.URL_TAREAS}/${id}.json`);

    // this._tareas = this._tareas.filter(t => {
    //   return t.id != id;
    // });

    // this.tareasCambiadas.emit(this._tareas);

    // let tarea = this._tareas.find(tarea => {
    //   return tarea.id == id;
    // });
    // let pos = this._tareas.indexOf(tarea);
    // this._tareas.splice(pos, 1);
  }

  completeTarea(tarea: any) {
    // let tarea = this._tareas.find(tarea => {
    //   return tarea.id == id;
    // });
    // tarea.completa = !tarea.completa;
    let tareaActualizada = {
      nombre: tarea.nombre,
      completa: !tarea.completa
    }
    return this.http.put(`${this.URL_TAREAS}/${tarea.id}.json`, tareaActualizada);
  }
}
