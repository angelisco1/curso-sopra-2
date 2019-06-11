let btnGuardar = document.getElementById('btn-guardar-genero');


// btnGuardar.onclick = saludar;
// btnGuardar.onclick = function() {};
// btnGuardar.addEventListener('click', saludar);
// btnGuardar.addEventListener('click', function(e) {
//   console.log('Has pulsado un botón');
// });
btnGuardar.addEventListener('click', (event) => {
  event.preventDefault();
  // console.log(event);
  // console.log('Has pulsado el botón: ' + event.target.textContent);

  let inputGenero = document.getElementById('nuevo-genero');

  let nuevoGenero = inputGenero.value.trim();
  if (nuevoGenero) {
    // Guardamos el genero
    saveGenero(nuevoGenero)
      .then(() => {
        return Swal.fire({
          text: 'Género guardado!',
          type: 'success'
        });
      })
      .then(() => {
        location.href = 'http://localhost:8080/admin/peliculas.html';
      });
  }
});

// Obtener Generos con fetch (promesas)
// fetch('https://ejemplos-dc1c1.firebaseio.com/generos.json').then((resp) => {
//   console.log(resp);
//   return resp.json();
// }).then(datos => {
//   console.log(datos);
// })

function saveGenero(genero) {
  return fetch('https://ejemplos-dc1c1.firebaseio.com/generos.json', {
    method: 'POST',
    body: JSON.stringify(genero)
  })
}


// function saveGenero(genero) {
//   let xhr = new XMLHttpRequest();
//   xhr.open('POST', 'https://ejemplos-dc1c1.firebaseio.com/generos.json');

//   xhr.addEventListener('readystatechange', () => {
//     if (xhr.status === 200 && xhr.readyState === 4) {
//       Swal.fire({
//         text: 'Género guardado!',
//         type: 'success'
//       });
//     }
//   });

//   xhr.send(JSON.stringify(genero));
// }

function saludar() {
  console.log('Hola');
}