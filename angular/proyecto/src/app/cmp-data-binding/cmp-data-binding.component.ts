import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent {

  nombre: string = 'Ángel';
  activadoModoEdicion: boolean = false;

  changeModoEdicion() {
    this.activadoModoEdicion = !this.activadoModoEdicion;
  }

  resetNombre(event) {
    // console.log(event.target.value);
    this.nombre = '';
  }

  changeNombre(event) {
    this.nombre = event.target.value;
  }

  mostrarValor(valor) {
    console.log(valor);
  }

}