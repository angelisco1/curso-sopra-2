
// function fn1(cb) {
//   console.log(1)
//   setTimeout(() => {
//     console.log(2);
//     cb(2);
//   }, 1000)
// }

// fn1((n) => {
//   console.log(3);
// });

// function fn2() {
//   console.log(1)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(2);
//       let num = 3
//       resolve(num);
//     }, 1000);
//   });
// }

// fn2().then((n) => {
//   console.log(n);
// });

// let promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let msg = 'El canario está en la jaula...';
//     resolve(msg);
//   }, 1000);
// }).then(msg => {
//   console.log('MSG: ' + msg);
// })


function getDatos(url) {
  return new Promise((resolve, reject) => {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let datos = JSON.parse(xhr.responseText);
        resolve(datos);
      }
    });

    xhr.send();

  });
}

function getArrayFromObject(obj) {
  const arr = [];
  for (let id in obj) {
    arr.push(obj[id]);
  }
  return arr;
}

function getGeneroElegido(generos) {
  const arrGeneros = getArrayFromObject(generos);
  return prompt(`Elige un genero: ${arrGeneros.join(', ')}`);
}

getDatos('https://ejemplos-dc1c1.firebaseio.com/generos.json')
  .then((generos) => {
    console.log(generos);
    let genero = getGeneroElegido(generos);
    return getDatos(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)
  })
  .then((objPeliculas) => {
    const peliculas = getArrayFromObject(objPeliculas);
    alert(`${getListaPeliculas(peliculas)}`);
  });

function getListaPeliculas (arr) {
  return arr.map(item => `- ${item}`).join('\n');
}

getDatos(`https://ejemplos-dc1c1.firebaseio.com/peliculas/Miedo.json`)
  .then((objPeliculas) => {
    const peliculas = getArrayFromObject(objPeliculas);
    alert(`${funcionChorra(peliculas).join('\n')}`);
  });