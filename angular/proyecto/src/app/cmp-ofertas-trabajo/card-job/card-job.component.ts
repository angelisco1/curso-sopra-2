import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Oferta } from '../oferta';

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.css']
})
export class CardJobComponent implements OnInit {
  @Input() oferta: Oferta; //= new Oferta('', '', '');
  @Output() inscripcion = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  inscribirEnOferta() {
    // this.oferta.inscrito = !this.oferta.inscrito;
    this.inscripcion.emit(this.oferta.id);
  }

}
