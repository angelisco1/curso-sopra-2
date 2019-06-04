function getRandomNum() {
  return Math.floor(Math.random()*10)+1;
  // return Math.ceil(Math.random()*9);
}

function empezar() {
  do {
    jugar();
    var seguirJugando = confirm('Quieres jugar otra vez??');
  } while(seguirJugando);
}

function jugar() {
  // var puntosJugador = jugarJugador();
  var puntosJugador = getPuntos(function(puntos) {
    return confirm('Llevas ' + puntos + ' puntos... Quieres otro número?')
  });
  console.log('Jugador: ' + puntosJugador);
  if (puntosJugador < 20) {
    // var puntosMaquina = jugarMaquina();
    var puntosMaquina = getPuntos(function(puntos) {
      return puntos < 17;
    });
    console.log('Maquina: ' + puntosMaquina);
    if (puntosMaquina < 20) {
      mostrarGanador(puntosJugador, puntosMaquina);
    } else {
      msgGanadorDirecto(puntosMaquina, 2);
    }
  } else {
    msgGanadorDirecto(puntosJugador, 1);
  }
}

function mostrarGanador(puntosJugador, puntosMaquina) {
  if (puntosJugador > puntosMaquina) {
    console.log('Gana el jugador!');
  } else if (puntosJugador < puntosMaquina) {
    console.log('Gana la máquina!');
  } else {
    console.log('Empate!');
  }
}

function msgGanadorDirecto(puntos, jugador) {
  if (puntos === 20) {
    console.log('Ha ganado ' + (jugador === 1 ? 'el jugador :)' : 'la máquina :('))
  } else {
    console.log('Ha ganado ' + (jugador === 1 ? 'la máquina :(' : 'el jugador :)'))
  }
}

function getPuntos(cb) {
  var puntos = 0;
  var gana = false;
  var pierde = false;
  var quiereNum = true;
  do {
    puntos += getRandomNum();
    gana = puntos20(puntos);
    pierde = puntosMayorA20(puntos);
    if (!gana && !pierde) {
      quiereNum = cb(puntos);
    }
  } while(quiereNum && !gana && !pierde);
  return puntos;
}

// function jugarJugador() {
//   var puntos = 0;
//   var gana = false;
//   var pierde = false;
//   var quiereNum = true;
//   do {
//     puntos += getRandomNum();
//     gana = puntos20(puntos);
//     pierde = puntosMayorA20(puntos);
//     if (!gana && !pierde) {
//       quiereNum = confirm('Llevas ' + puntos + ' puntos... Quieres otro número?');
//     }
//   } while(quiereNum && !gana && !pierde);
//   return puntos;
// }

// function jugarMaquina() {
//   var puntos = 0;
//   var gana = false;
//   var pierde = false;
//   var quiereNum = true;
//   do {
//     puntos += getRandomNum();
//     gana = puntos20(puntos);
//     pierde = puntosMayorA20(puntos);
//     // console.log(puntos);
//     // console.log(gana);
//     // console.log(pierde);
//     if (!gana && !pierde) {
//       quiereNum = puntos < 17;
//     }
//   } while(quiereNum && !gana && !pierde);
//   // console.log(puntos);
//   // console.log(gana);
//   // console.log(pierde);
//   return puntos;
// }

function puntos20(puntos) {
  return puntos === 20;
}

function puntosMayorA20(puntos) {
  return puntos > 20;
}

empezar();