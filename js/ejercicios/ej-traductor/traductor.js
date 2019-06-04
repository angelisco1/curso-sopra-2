var Traductor = (function() {
  var en = {
    hola: 'hello',
    adios: 'bye',
    'buenos dias': 'good morning',
  }

  var it = {
    hola: 'ciao',
    adios: 'addio',
    'buenos dias': 'boungiorno',
  }

  function traduce(texto, idioma) {
    switch(idioma) {
      case 'en':
        return en[texto] ? en[texto] : 'No tenemos esa traducción';
      case 'it':
        return it[texto] ? it[texto] : 'No tenemos esa traducción';
      default:
        return 'No conocemos ese idioma';
    }
  }

  return {
    traduce: traduce
  }
})();

// console.log(en);

console.log(Traductor.traduce('hola', 'en')) // Hello
console.log(Traductor.traduce('buenos dias', 'it')) // Boungiorno
console.log(Traductor.traduce('adios', 'en')) // Bye
console.log(Traductor.traduce('adios', 'fr')) // No conocemos ese idioma
console.log(Traductor.traduce('hasta luego', 'en')) // No tenemos esa traducción