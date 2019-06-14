import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _tareasService: TareasService) { }

  ngOnInit() {
  }

  add(nombre: string, completa: boolean) {
    const tarea = new Tarea(this._tareasService.useId(), nombre, completa);
    this._tareasService.addTarea(tarea);
  }

}
