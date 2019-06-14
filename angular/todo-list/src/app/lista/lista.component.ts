import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  tareas: Array<Tarea>;

  constructor(private _tareasService: TareasService) { }

  getTareas() {
    this._tareasService.tareas.subscribe((tareas) => {
      this.tareas = tareas;
    })
  }

  ngOnInit() {
    // this.tareas = this._tareasService.tareas;
    // this._tareasService.tareas.subscribe((tareas) => {
    //   this.tareas = tareas;
    // })
    this.getTareas();

    this._tareasService.tareasCambiadas.subscribe(() => {
      this.getTareas();
    });
    // this._tareasService.tareasCambiadas.subscribe(nuevaLista => {
    //   this.tareas = nuevaLista;
    // });
  }

}
