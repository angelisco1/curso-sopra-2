// Funciones
function muestraMsg(msg) {
  console.log(msg);
}

muestraMsg("Un mensaje");
muestraMsg();
muestraMsg("Otro mensaje", 2);

// Arguments
function muestraArgs(arg1) {
  console.log(arguments[2]);
}

muestraArgs(1, 2, 3, 4);

// Funciones recursivas
function sumatorio(num) {
  if (num === 1) {
    return num;
  } else {
    return num + sumatorio(num-1);
  }
}

var sum5 = sumatorio(5); // 5+4+3+2+1
console.log('Sumatorio de 5: ' + sum5);

// Callbacks
function ejemploCallbacks() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 500);
  console.log(3);
}

// console.log('**********')
// ejemploCallbacks()
// console.log('**********')

function validar(nombreIntroducido, cb) {
  console.log('Pidiendo nombres validos...');
  setTimeout(function() {
    console.log('Nombres validos recibidos...');
    if (['angel', 'sandra', 'charly'].includes(nombreIntroducido)) {
      cb();
      // return true;
    }
  }, 300);
}

// function guardar() {
//   console.log('Datos guardados!');
// }

// var esValido = validar('angel', guardar);
// console.log('ESVALIDO: ' + esValido);
// if (esValido) {
//   guardar();
// }

validar('angel', function () {
  console.log('Datos guardados!');
})




// Funciones anónimas

// function () {
//   // Aquí se hace algo
// }

var series = ['TWD', 'GOT', 'Chernobyl'];

series.forEach(function (elem, pos) {
  console.log(pos + ': ' + elem);
});

// Funciones de arrays
var nums = [1, 2, 3, 4, 5];

var numImpares = nums.filter(function (elem) {
  return elem % 2 !== 0;
})
console.log(numImpares);

var numImparesX3 = numImpares.map(function (elem) {
  return elem * 3;
});
console.log(numImparesX3);

var sumaTotalImparesX3 = numImparesX3.reduce(function (acc, elem) {
  return acc += elem;
}, 10);

console.log(sumaTotalImparesX3);