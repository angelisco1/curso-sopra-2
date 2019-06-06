let btnGuardar = document.getElementById('btn-guardar-genero');

console.log(btnGuardar);
console.dir(btnGuardar);

// btnGuardar.onclick = saludar;
// btnGuardar.onclick = function() {};
// btnGuardar.addEventListener('click', saludar);
// btnGuardar.addEventListener('click', function(e) {
//   console.log('Has pulsado un botón');
// });
btnGuardar.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event);
  console.log('Has pulsado el botón: ' + event.target.textContent);

  let inputGenero = document.getElementById('nuevo-genero');

  let nuevoGenero = inputGenero.value.trim();
  if (nuevoGenero) {
    // Guardamos el genero
    saveGenero(nuevoGenero);
  }
});

function saveGenero(genero) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://ejemplos-dc1c1.firebaseio.com/generos.json');

  xhr.addEventListener('readystatechange', () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      Swal.fire({
        text: 'Género guardado!',
        type: 'success'
      });
    }
  });

  xhr.send(JSON.stringify(genero));
}

function saludar() {
  console.log('Hola');
}