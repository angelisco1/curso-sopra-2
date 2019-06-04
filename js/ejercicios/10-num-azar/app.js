var seguirJugando = true;
do {
  var numAzar = Math.floor(Math.random()*51);
  console.log(numAzar);
  var turnos = 0;
  do {
    var numUsuario = prompt('Introduce un numero entre 0 y 50:');
    turnos++;

    if (numAzar > numUsuario) {
      console.log('El número que buscas es mayor');
    } else if (numAzar < numUsuario) {
      console.log('El número que buscas es menor');
    }

  } while(numAzar !== Number(numUsuario));

  console.log('Has acertado! El número era: ' + numAzar);
  console.log('Has tardado ' + turnos + ' turnos en acertarlo...');

  seguirJugando = confirm('Seguir jugando?');
} while(seguirJugando);