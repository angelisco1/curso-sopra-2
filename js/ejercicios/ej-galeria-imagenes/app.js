const prefijo = './images/';
const imagenes = [
  'meteor.png',
  'nuxtjs.png',
  'react.png',
  'redux.png',
  'ruby.png',
  'vue.png',
];

let pos = 0;

let btnSig = document.getElementById('btn-siguiente');
let btnAnt = document.getElementById('btn-anterior');

btnSig.addEventListener('click', () => {
  let imagen = document.getElementById('imagen');
  if (pos < imagenes.length-1) {
    pos+=1;
  } else {
    pos = 0;
  }
  imagen.src = prefijo + imagenes[pos];
})

btnAnt.addEventListener('click', () => {
  let imagen = document.getElementById('imagen');
  if (pos > 0) {
    pos-=1;
  } else {
    pos = imagenes.length-1;
  }
  imagen.src = prefijo + imagenes[pos];
})

setInterval(antImagen, 1500);

function antImagen() {
  let imagen = document.getElementById('imagen');
  if (pos > 0) {
    pos-=1;
  } else {
    pos = imagenes.length-1;
  }
  imagen.src = prefijo + imagenes[pos];
}