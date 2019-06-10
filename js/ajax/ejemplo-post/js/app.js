

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
}

function getPeliculasHTML(peliculas) {
  const nombresPeliculas = [];
  for (let id in peliculas) {
    nombresPeliculas.push(`<li>${peliculas[id]}</li>`);
  }
  return `
    <ul>
      ${nombresPeliculas.join('')}
    </ul>
  `;
}

function getGenerosPeliculasHTML(datos) {
  let resultado = '';

  for (let genero in datos) {
    resultado += `
      <section>
        <h2>${genero}</h2>
        <article>
          ${getPeliculasHTML(datos[genero])}
        </article>
      </section>
      <hr>
    `
  }

  return resultado;
}