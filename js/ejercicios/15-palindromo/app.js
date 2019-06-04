function esPalindromo(texto) {
  var textoSinEspacios = texto.replace(/ /g, '');

  var arrayLetras = textoSinEspacios.split('');
  var arrayAlReves = arrayLetras.reverse();
  var textoAlReves = arrayAlReves.join('');

  return textoSinEspacios === textoAlReves;
}

console.log(esPalindromo("hola aloh")); // => true
console.log(esPalindromo("hola a loh")); // => true
console.log(esPalindromo("hola al oh")); // => true
console.log(esPalindromo("holaloh")); // => true
console.log(esPalindromo("hola alo")); // => false