function Serie(titulo, episodios, episodiosVistos) {
  this.titulo = titulo;
  this.episodios = episodios;
  this.episodiosVistos = episodiosVistos;
  this.finalizada = function () {
    return this.episodios - this.episodiosVistos === 0;
  }
}

var twd = new Serie('The Walking Dead', 180, 178);
var got = new Serie('Game of Thrones', 180, 180);
var tl = new Serie('The Leftovers', 180, 180);
// console.log(twd);

var misSeries = [twd, got, tl]

function seriesNoFinalizadas(series) {
  // var noFinalizadas = [];
  // for (var serie of series) {
  //   if (!serie.finalizada()) {
  //     noFinalizadas.push(serie);
  //   }
  // }
  // return noFinalizadas;

  // CON FILTER MEJOR
  return series.filter(function(serie) {
    return !serie.finalizada();
  })
}

console.log(seriesNoFinalizadas(misSeries));
