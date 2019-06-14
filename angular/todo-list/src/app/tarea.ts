export class Tarea {
  constructor(private _id: string, private _nombre: string, private _completa: boolean) { }

  get id(): string {
    return this._id;
  }

  set id(val: string) {
    this._id = val;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(val: string) {
    this._nombre = val;
  }

  get completa(): boolean {
    return this._completa;
  }

  set completa(val: boolean) {
    this._completa = val;
  }

}
