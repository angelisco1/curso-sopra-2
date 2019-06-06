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

  document.getElementById('generos').textContent = generos.join(', ');

  let btnBuscar = document.getElementById('btnBuscar');
  btnBuscar.addEventListener('click', (event) => {
    // console.log('PULSADO!!!');

    let inputGenero = document.getElementById('inputGenero');

    let generoElegido = inputGenero.value;

    getDatos(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${generoElegido}.json`, (peliculas) => {

      for (let id in peliculas) {
        peliculas = peliculas[id];
      }

      let ulPeliculas = document.getElementById('listaPeliculas');

      ulPeliculas.innerHTML = peliculas.map(peli => `<li>${peli}</li>`).join('');

    });


  });


});




//   getDatos(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`, (objPeliculas) => {
//     for (let id in objPeliculas) {
//       alert(objPeliculas[id].join(', '));
//     }
//   });
