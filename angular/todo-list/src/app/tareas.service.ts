import { Injectable, EventEmitter } from '@angular/core';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private _tareas: Array<Tarea> = [
    new Tarea('1', 'Tarea 1', false),
    new Tarea('2', 'Tarea 2', false),
  ];
  contId: number = 3;
  tareasCambiadas = new EventEmitter<Array<Tarea>>();

  constructor() { }

  useId() {
    let id = this.contId+'';
    this.contId++;
    return id;
  }

  get tareas(): Array<Tarea> {
    return this._tareas;
  }

  addTarea(tarea: Tarea): void {
    this._tareas.push(tarea);
  }

  deleteTarea(id: string): void {
    this._tareas = this._tareas.filter(t => {
      return t.id != id;
    });

    this.tareasCambiadas.emit(this._tareas);

    // let tarea = this._tareas.find(tarea => {
    //   return tarea.id == id;
    // });
    // let pos = this._tareas.indexOf(tarea);
    // this._tareas.splice(pos, 1);
  }

  completeTarea(id: string): void {
    let tarea = this._tareas.find(tarea => {
      return tarea.id == id;
    });
    tarea.completa = !tarea.completa;
  }
}
