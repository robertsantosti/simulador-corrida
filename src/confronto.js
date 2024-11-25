const TIPOS = ["CASCO", "BOMBA"];

export class Confronto {
  perdedor;

  constructor(jogador1, jogador2) {
    this._jogador1 = jogador1;
    this._jogador2 = jogador2;
  }

  confrontar = async () => {
    this.perdedor =
      this._jogador1.pontuacaoRodada > this._jogador2.pontuacaoRodada
        ? this._jogador2
        : this._jogador1;

    this._jogador1.pontuacaoRodada !== this._jogador2.pontuacaoRodada &&
      (await this._selecionarConfronto());
  };

  _confrontarComBomba = async () => {
    await this.perdedor.perderPontos(2);
    console.log(`💣 ${this.perdedor.nome} perdeu 2 pontos`);
  };

  _confrontarComCasco = async () => {
    await this.perdedor.perderPontos();
    console.log(`🐢 ${this.perdedor.nome} perdeu 1 ponto`);
  };

  _selecionarConfronto = async () => {
    const tipo = TIPOS[Math.floor(Math.random() * TIPOS.length)];

    if (tipo === "BOMBA") {
      await this._confrontarComBomba();
    }

    if (tipo === "CASCO") {
      await this._confrontarComCasco();
    }
  };
}
