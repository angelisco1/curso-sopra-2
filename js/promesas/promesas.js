let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let msg = 'El canario está en la jaula...';
    resolve(msg);
  }, 1000);
}).then(msg => {
    console.log('MSG: ' + msg);
  })


getDatos('https://ejemplos-dc1c1.firebaseio.com/generos.json').then((misDatos) => {
  console.log(misDatos);
  // return getDatos()
})

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