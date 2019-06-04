var miCalculadora = (function() {
  console.log('Hola');

  function suma(n1, n2) {
    return n1 + n2;
  }

  function resta(n1, n2) {
    return n1 - n2;
  }

  function multiplica(n1, n2) {
    return n1 * n2;
  }

  function divide(n1, n2) {
    return n1 / n2;
  }

  return {
    suma: suma,
    resta: resta,
    divide: divide,
    multiplica: multiplica,
  }
})()

miCalculadora.suma(1, 2)

function suma() {
  return 1;
}