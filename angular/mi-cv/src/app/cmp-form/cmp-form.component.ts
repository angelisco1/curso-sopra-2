import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cmp-form',
  templateUrl: './cmp-form.component.html',
  styleUrls: ['./cmp-form.component.css']
})
export class CmpFormComponent implements OnInit {

  @Output() cambiarCV = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(event) {
    let datos = {
      key: event.target.id,
      val: event.target.value
    }
    this.cambiarCV.emit(datos);
  }

  addSkill(skill) {
    this.cambiarCV.emit({key: 'skills', val: skill});
  }

}
