import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-inferior1',
  templateUrl: './cmp-inferior1.component.html',
  styleUrls: ['./cmp-inferior1.component.css']
})
export class CmpInferior1Component implements OnInit {

  @Input() miNombre: string = 'Ángel';
  @Output() avisarCambio = new EventEmitter<string>();

  cambiarNombre() {
    // this.miNombre = 'Angel';
    this.avisarCambio.emit('Angel');
  }

  constructor() { }

  ngOnInit() {
  }

}
