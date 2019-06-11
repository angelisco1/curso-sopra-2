import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = '';
  apellidos = '';
  email = '';
  foto = 'https://angular.io/assets/images/logos/angular/angular.png';
  skills: Array<string> = [];

  cambiarValor(datos) {
    if (datos.key === 'skills') {
      this.skills.push(datos.val);
    } else {
      this[datos.key] = datos.val;
    }
  }

}
