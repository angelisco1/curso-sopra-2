var texto = "Hola mundo!"

console.log(texto)
console.log(typeof(texto))

texto = 3

console.log(       'Da igual los espacios y saltos de línea... No se tienen en cuenta.'
)

// comentario de una línea
/*
  Comentario de
  múltiples
  líneas
*/

var unTexto = '';
// var un_numero = 3;

var nombre1 = "Me llamo \"Angel\""
var nombre2 = 'Me llamo "Angel"'

// Truthy o Falsy

if (nombre1) {
  console.log('Valor truthy');
}

if (unTexto) {
  console.log('Valor truthy');
} else {
// if (!unTexto) {
  console.log('Valor falsy');
}


// Arrays

var numsLiteral = [1, 2, 3, 4, 5];
var numsConstructor = new Array(6, 7, 8, 9);

var ar3Posiciones = new Array(3);
console.log(ar3Posiciones);
ar3Posiciones[0] = 10;
ar3Posiciones[1] = 11;
ar3Posiciones.push(12);
ar3Posiciones.push(13);
ar3Posiciones.push(14);
console.log(ar3Posiciones);

nombre1 = 'Angel';
console.log(nombre1[1]);

num = 223;
console.log(num[1]);

var direccion = ['Calle', 'Norte', 12, '3B', 28330, 'Madrid', true];
direccion[4] = '28331';
console.log(direccion);

// Op. Ternario

var txtNum = 3 % 2 === 0 ? 'Es par' : 'Es impar';

var txtNum2 = '';
if (3 % 2 === 0) {
  txtNum2 = 'Es par';
} else {
  txtNum2 = 'Es impar';
}

console.log(txtNum)
console.log(txtNum2)

// Consola
console.log('Un mensaje de información');
console.warn('Un mensaje de peligro');
console.error('Un mensaje de error');

// Popup JS
// alert('Mostramos un mensaje'); // No devuelve nada
// var esVerdad = confirm('Es verdad lo que dicen??'); // Devuelve true o false
// var miNombre = prompt('Como te llamas??') // Devuelve null o lo que se haya escrito

// If-else if-else

// if (miNombre === 'Paco') {
//   console.log('Eres Paco');
// } else if (miNombre === 'Angel') {
//   console.log('Eres Angel');
// } else {
//   console.log('No eres Paco y tampoco Angel, quien eres??')
// }

// // Switch

// switch(miNombre) {
//   case 'Paco':
//     console.log('Eres Paco');
//     break;
//   case 'Angel':
//     console.log('Eres Angel');
//     break;
//   default:
//     console.log('No eres Paco y tampoco Angel, quien eres??');
// }

// For
var nombres = ['Robb', 'Arya', 'Sansa', 'Rickon', 'Bran'];

for (var i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// For in
for (var i in nombres) {
  console.log('FORIN: ' + nombres[i]);
}

// For of
for (var nombre of nombres) {
  console.log('FOROF: ' + nombre);
}

// While
var num = prompt('Introduce un num:');
while (Number(num) !== -1) {
  console.log('Introduce -1 para salir del bucle')
  num = prompt('Introduce un num:');
}


// Do while
do {
  console.log('Introduce -1 para salir del bucle')
  num = prompt('Introduce un num:');
} while (Number(num) !== -1)
