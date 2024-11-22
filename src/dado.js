export class Dado {
  static rolar() {
    return Math.ceil(Math.random() * 6) + 1;
  }
}
