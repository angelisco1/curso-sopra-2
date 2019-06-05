class Coche {
  static numRuedas() {
    return 4;
  }

  constructor(marca='', modelo='', color='') {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }

  pintar(nuevoColor) {
    this.color = nuevoColor;
  }
}

let tesla = new Coche('Tesla', 'Roadster', 'rojo');
console.log(tesla);
let vacio = new Coche();
console.log(vacio);
console.log(Coche.numRuedas());

class Persona {
  constructor(nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
  }

  getNombreCompleto() {
    return this.nombre + ' ' + this.apellidos;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellidos, puesto) {
    super(nombre, apellidos);
    this.puesto = puesto;
    let edad = 20;
    this.getEdad = () => {
      return edad;
    }
    this.setEdad = (nuevaEdad) => {
      edad = nuevaEdad;
    }
  }
}

let angel = new Desarrollador('Angel', 'Villalba', 'JS');
console.log(angel.getNombreCompleto());
console.log(angel.edad);
console.log(angel.getEdad());