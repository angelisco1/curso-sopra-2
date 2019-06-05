// CONSTANTES
const NUM_MAX = 3;
// NUM_MAX = 2;

// LET
let angel = 'Angel';
angel = 'Paco';
console.log(angel);

function getNum(p1) {
  let n1 = 0;
  var n2 = 1;
  if (p1 === 0) {
    let n1 = 3;
    var n2 = 4;
    console.log(n1)
    console.log(n2)
  }
  console.log(n1)
  console.log(n2)
}

getNum(0);

// TEMPLATE LITERALS
let nombre = 'Rickon'
let apellido = 'Stark';
let nombreCompleto = 'Me llamo ' + nombre + ' ' + apellido;
let nombreCompleto2 = `Me llamo ${nombre} ${apellido}`;
function esPar() {
  return (2+2)%2===0 ? 'par' : 'impar';
}
let suma = `La suma de 2+2 es ${2+2} y es ${esPar()}`;
console.log(nombreCompleto)
console.log(nombreCompleto2)
console.log(suma)

console.log(`
Esto es
un string
de múltiples
líneas.
`)


// ARROW FUNCTIONS

let nums = [1, 2, 3, 4];
nums.map(function (num) {
  return num*2;
})

let numDobles = nums.map((num) => {
  return num*2;
})
numDobles = nums.forEach(() => {
  console.log('Un num');
})
numDobles = nums.map(num => {
  return num*2;
})
numDobles = nums.map(num => num*2)
numDobles = nums.map((num, pos) => num*pos);

console.log(numDobles);


let pelicula = {
  titulo: 'Los vengadores',
  setAnyoEstreno: function(anyo) {
    this.anyoEstreno = anyo;
    let mostrar = () => {
      console.log(this);
    }
    mostrar();
  }
}

pelicula.setAnyoEstreno(2019);
console.log(pelicula.anyoEstreno);

// REST PARAMS
function getNumLoteria(idSorteo, ...nums) {
  return `Sorteo ${idSorteo}: ${nums.join(', ')}`;
}

let numGanador = getNumLoteria(1, 4, 24, 31, 38, 46);
console.log(numGanador);

// SPREAD OPERATOR
let telefonoDesconocido = ['+34', 677334672];
let telefonoCharly = ['+34', 677334672, 'Charly'];

function creaNumConPrefijo(prefijo, numTelf, nombre='Desconocido') {
  return `${nombre}: ${prefijo} ${numTelf}`;
}

// creaNumConPrefijo(telefono[0], telefono[1])
console.log(creaNumConPrefijo(...telefonoDesconocido));
console.log(creaNumConPrefijo(...telefonoCharly));

// DESESTRUCTURACION
let serie = {
  titulo: 'Gangland Undercover',
  temporadas: 3,
  episodios: 30,
  finaliza: true
}

let {titulo, finaliza, ...restoProps} = serie;
console.log(titulo, finaliza);
console.log(restoProps);


let mascotas = ['gato', 'perro', 'pez', 'canario'];
// let gato = mascotas[0]
// let perro = mascotas[1]
// let pez = mascotas[2]
// let [gato, , ...restoMascotas] = mascotas
let [gato, perro, ...restoMascotas] = mascotas
console.log(gato, perro);
console.log(restoMascotas);
