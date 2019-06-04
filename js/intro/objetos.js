var persona = {
  nombre: 'Charly',
  apellido: 'Falco',
  nombreCompleto: function() {
    return this.nombre + ' ' + this.apellido;
  }
}

console.log(persona.nombre);
console.log(persona['nombre']);

var clave = 'apellido';
console.log(persona.clave);
console.log(persona[clave]);

persona.edad = 20;

console.log(persona.nombreCompleto());


var pelicula = {
  titulo: 'Los vengadores',
  director: {
    nombre: '...',
    apellido: 'Russo'
  },
  genero: ['Accion', 'Superheroes'],
  setAnyoEstreno: function(anyo) {
    this.anyoEstreno = anyo;
    // var self = this;
    function mostrar() {
      console.log(this);
      // console.log(self);
    }
    // mostrar.bind(persona)();
    mostrar.call(this);
  }
}

pelicula.setAnyoEstreno(2019);
console.log(pelicula.anyoEstreno);


// var serie = {
//   titulo: 'The Walking Dead',
//   episodios: 180,
//   episodiosVistos: 178
// }

function Serie(titulo, episodios, episodiosVistos) {
  this.titulo = titulo;
  this.episodios = episodios;
  this.episodiosVistos = episodiosVistos;
  this.fn1 = function () {

  }
}

var twd = new Serie('The Walking Dead', 180, 178);
var got = new Serie('Game of Thrones', 180, 178);
console.log(twd);

var objVacio = {};
objVacio = new Serie('', 0, 0);


var cancionBatman = new Array(16).join('what'-1) + ' Batman!';
console.log(cancionBatman);

// EJERCICIO 14
var numeros = [1, 34, 12, 64, 75, 343, 64, 75, 2323, 54, 6];
var ej14 = numeros.map(function(num) {
  return num % 2 === 0 ? 'PAR' : num;
});
console.log(ej14);


var texto = 'Hola mundO!';
console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.replace(/o/gi, 0));
console.log(texto.substring(3, 6));
console.log(texto.indexOf('!'));
console.log(texto.indexOf('e'));
console.log(texto.indexOf('mund'));
console.log(texto.includes('e'));
console.log(texto.includes('o'));
console.log(texto.split(' '));


var colores = ['amarillo', 'rojo', 'verde'];
var ultimo = colores.pop();
var primero = colores.shift();
console.log(ultimo, primero);
colores.push('blanco');
colores.unshift('azul');
colores = colores.concat([ultimo, primero]);
console.log(colores);
console.log(colores.join(' - '));


var hoy = new Date();
console.log(hoy.getFullYear());
console.log(hoy.getDay());
console.log(hoy.getDate());
console.log(typeof(hoy));

var angel = {nombre: 'Angel'};
var angelJSON = JSON.stringify(angel);
var angelJS = JSON.parse(angelJSON);
console.log(angel);
console.log(angelJSON);
console.log(angelJS);