// "Hola" => "aloH"

String.prototype.reverse = function () {
  var arrayLetras = this.split('');
  arrayLetras.reverse();
  var textoAlReves = arrayLetras.join('');
  return textoAlReves;
}

console.log("Hola".reverse()) // "aloH"


// [1, 2, 3].miIncludes(2); // => true
Array.prototype.miIncludes = function (elem) {
  return this.indexOf(elem) > -1 ? true : false;
}
console.log([1, 2, 3].miIncludes(2));
console.log(['perro', 'pez'].miIncludes('gato'));
