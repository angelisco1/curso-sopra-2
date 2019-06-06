function getDatos() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://api.icndb.com/jokes/random');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(xhr.responseText);
      let datos = JSON.parse(xhr.responseText);
      console.log(datos.value.joke);
    }
  }

  xhr.send();
}

getDatos();