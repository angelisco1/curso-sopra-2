window.onload = function() {

  function getPeliculasYGeneros() {
    return new Promise((resolve, reject) => {

      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/peliculas.json');

      xhr.addEventListener('readystatechange', () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
          const generosPeliculas = JSON.parse(xhr.responseText);
          resolve(generosPeliculas);
        }
      })

      xhr.send();
    });
  }

  getPeliculasYGeneros()
    .then(datos => {
      let html = getGenerosPeliculasHTML(datos);
      pintarDatos(html);
    })


  function pintarDatos(html) {
    let divContenedor = document.getElementById('secciones-peliculas');
    divContenedor.innerHTML = html;
    inicializarListenersBotones();
  }

  function inicializarListenersBotones() {
    let botonesEliminar = document.getElementsByClassName('btn-danger');

    for (let btn of botonesEliminar) {
      btn.addEventListener('click', (event) => {
        deletePelicula(btn.getAttribute('data-genero'), btn.id)
          .then(() => {
            return Swal.fire({
              text: 'Pelicula eliminada correctamente...',
              type: 'success'
            })
          })
          .then(() => {
            location.href = 'http://localhost:8080/index.html';
          })
      })
    }
  }


  function deletePelicula(genero, id) {
    return fetch(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}/${id}.json`, {
      method: 'DELETE'
    });
  }

  function getPeliculasHTML(genero, peliculas) {
    const nombresPeliculas = [];
    for (let id in peliculas) {
      nombresPeliculas.push(`
        <li class="list-group-item">
          ${peliculas[id]}
          <button type="button" class="btn btn-danger" id="${id}" data-genero="${genero}" disabled>Eliminar</button>
        </li>
      `);
    }
    return `
      <div class="list-group">
        ${nombresPeliculas.join('')}
      </div>
    `;
  }

  function getGenerosPeliculasHTML(datos) {
    let resultado = '';

    for (let genero in datos) {
      resultado += `
        <div class="card">
          <div class="card-header list-group-item d-flex justify-content-between align-items-center" id="heading${genero}">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${genero}" aria-expanded="true" aria-controls="collapse${genero}">${genero}</button>
            </h2>
            <span class="badge badge-primary badge-pill">${Object.entries(datos[genero]).length}</span>
          </div>
          <div id="collapse${genero}" class="collapse show" aria-labelledby="heading${genero}" data-parent="#accordionExample">
            <div class="card-body">
              ${getPeliculasHTML(genero, datos[genero])}
            </div>
          </div>
        </div>
      `
    }

    // for (let genero in datos) {
    //   resultado += `
    //     <section>
    //       <h2>${genero}</h2>
    //       <article>
    //         ${getPeliculasHTML(genero, datos[genero])}
    //       </article>
    //     </section>
    //     <hr>
    //   `
    // }

    return '<div class="accordion" id="accordionExample">' + resultado + '</div>';
  }

  let checkEdicion = document.getElementById('edicion');
  checkEdicion.addEventListener('change', (event) => {
    let botonesEliminar = document.getElementsByClassName('btn-danger');

    for (let btn of botonesEliminar) {
      if (event.target.checked == true) {
        btn.removeAttribute('disabled');
      } else {
        btn.setAttribute('disabled', true);
      }
    }
  })

}