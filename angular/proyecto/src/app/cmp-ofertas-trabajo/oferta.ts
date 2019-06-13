export class Oferta {
  constructor(private _id: number, private _titulo: string, private _descripcion: string, private _logo: string, private _inscrito: boolean = false) { }

  get id(): number {
    return this._id;
  }

  get titulo(): string {
    return this._titulo;
  }

  set titulo(val: string) {
    this._titulo = val;
  }

  get descripcion(): string {
    return this._descripcion;
  }

  set descripcion(val: string) {
    this._descripcion = val;
  }

  get logo(): string {
    return this._logo;
  }

  set logo(val: string) {
    this._logo = val;
  }

  get inscrito(): boolean {
    return this._inscrito;
  }

  set inscrito(val: boolean) {
    this._inscrito = val;
  }
}

// oferta.titulo = 'ssss' // Ejecuta el setter
// console.log(oferta.titulo) // Ejecuta el getter
// oferta.titulo = oferta.titulo + '!!!' // Ejecuta el getter y el setter
