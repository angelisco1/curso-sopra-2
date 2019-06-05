// Hay que usar SPREAD OPERATOR y DESESTRUCTURACION
// let n1 = nums.splice(2, 1)
let equipos = ['Valencia', 'Levante', 'Real Madrid', 'At Madrid', 'At Bilbao', 'Barcelona', 'Sevilla', 'Betis'];
// Valencia - Sevilla
// At Bilbao - Betis
// At Madrid - Barcelona
// Levante - Real Madrid

// let equipos = ['Valencia', 'Levante', 'Real Madrid', 'At Madrid', 'At Bilbao', 'Barcelona', 'Sevilla'];
// Valencia - Sevilla
// At Madrid - Barcelona
// Levante - Real Madrid
// At Bilbao pasa a la siguiente ronda


function shuffle(equipos) {
  let equiposRandom = [];

  for (let i = equipos.length-1; i >= 0; i--) {
    let posRandom = Math.floor(Math.random() * equipos.length);
    let equipo = equipos.splice(posRandom, 1);
    equiposRandom.push(...equipo); // SPREAD
  }

  return equiposRandom;
}

// console.log(shuffle(equipos));

function getEmparejamientos(equipos) {
  if (equipos < 2) {
    if (equipos.length === 1) {
      let [equipo] = equipos; // DESESTRUCTURACIÓN
      console.log(`${equipo} pasa directamente a la siguiente ronda`);
    }
  } else {
    let [equipo1, equipo2, ...restoEquipos] = equipos; // DESESTRUCTURACIÓN Y REST PARAMS
    console.log(`${equipo1} - ${equipo2}`);
    getEmparejamientos(restoEquipos);
  }
}

getEmparejamientos(shuffle(equipos))