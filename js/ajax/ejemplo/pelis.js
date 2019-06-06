// https://ejemplos-dc1c1.firebaseio.com/generos.json
// https://ejemplos-dc1c1.firebaseio.com/peliculas/<genero>.json

// Paso 1: Pedir los generos
// Paso 2: Mostrar popup para elegir un genero
// Paso 3: Pedir las peliculas del genero elegido
// Paso 4: Mostrar las peliculas recibidas en un popup


function getDatos(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let datos = JSON.parse(xhr.responseText);
      cb(datos);
    }
  }

  xhr.send();
}

getDatos('https://ejemplos-dc1c1.firebaseio.com/generos.json', (generos) => {
  let genero = getGeneroElegido(generos);

  getDatos(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`, (objPeliculas) => {
    for (let id in objPeliculas) {
      alert(objPeliculas[id].join(', '));
    }
  });

});

// function getGeneros() {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/generos.json');

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const datos = JSON.parse(xhr.responseText);
//       console.log(datos);
//       let genero = getGeneroElegido(datos);
//       getPeliculas(genero);
//     }
//   }

//   xhr.send();
// }

// function getPeliculas(genero) {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const datos = JSON.parse(xhr.responseText);
//       console.log(datos);
//       for (let id in datos) {
//         alert(datos[id].join(', '));
//       }
//     }
//   }

//   xhr.send();
// }

function getGeneroElegido(generos) {
  return prompt(`Elige un genero: ${generos.join(', ')}`);
}

// getGeneros();