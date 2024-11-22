const PISTAS = ["RETA", "CURVA", "CONFRONTO"];

export class Pista {
  static get() {
    return PISTAS[Math.ceil(Math.random() * 3) - 1];
  }
}
