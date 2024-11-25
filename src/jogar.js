import { Confronto } from "./confronto.js";
import { Dado } from "./dado.js";
import { Pista } from "./pista.js";

export class Jogar {
  _vencedor;

  constructor(jogador1, jogador2) {
    this.jogador1 = jogador1;
    this.jogador2 = jogador2;
  }

  async inicio() {
    console.log(
      `🏁🚨 Corrida entre ${this.jogador1.nome} e ${this.jogador2.nome} começando...\n`
    );
  }

  async disputarCorrida(rodada) {
    console.log(`🏁 Rodada ${rodada}`);

    const PISTA = Pista.get();
    console.log(`🏁 Pista ${PISTA}`);

    const resultadoDadoPlayer1 = Dado.rolar();
    const resultadoDadoPlayer2 = Dado.rolar();

    if (PISTA === "RETA") {
      this.jogador1.pontuarRodada(
        resultadoDadoPlayer1 + this.jogador1.velocidade
      );
      this.jogador2.pontuarRodada(
        resultadoDadoPlayer2 + this.jogador2.velocidade
      );
    }

    if (PISTA === "CURVA") {
      this.jogador1.pontuarRodada(
        resultadoDadoPlayer1 + this.jogador1.manobrabilidade
      );
      this.jogador2.pontuarRodada(
        resultadoDadoPlayer2 + this.jogador2.manobrabilidade
      );
    }

    if (PISTA === "CONFRONTO") {
      await this.jogador1.pontuarRodada(
        resultadoDadoPlayer1 + this.jogador1.poder
      );
      await this.jogador2.pontuarRodada(
        resultadoDadoPlayer2 + this.jogador2.poder
      );
    }

    await this._logRodada(this.jogador1, PISTA, resultadoDadoPlayer1);
    await this._logRodada(this.jogador2, PISTA, resultadoDadoPlayer2);

    if (PISTA === "CONFRONTO") {
      const confronto = new Confronto(this.jogador1, this.jogador2);
      await confronto.confrontar();
    }

    await this._pontuarJogador();
  }

  async finalizar() {
    if (this.jogador1.pontuacaoTotal < 0) {
      this.jogador1.limparPontuacao();
    }

    if (this.jogador2.pontuacaoTotal < 0) {
      this.jogador2.limparPontuacao();
    }

    console.log(`Resultado final:\n`);
    console.log(`${this.jogador1.nome}: ${this.jogador1.pontuacaoTotal}`);
    console.log(`${this.jogador2.nome}: ${this.jogador2.pontuacaoTotal}`);

    if (this.jogador1.pontuacaoTotal === this.jogador2.pontuacaoTotal) {
      console.log(`\nA corrida terminou em empate`);
    }

    if (this.jogador1.pontuacaoTotal > this.jogador2.pontuacaoTotal) {
      this._vencedor = this.jogador1;
    }

    if (this.jogador1.pontuacaoTotal < this.jogador2.pontuacaoTotal) {
      this._vencedor = this.jogador2;
    }

    this._vencedor !== undefined &&
      console.log(`\n🏆 ${this._vencedor.nome} venceu a corrida`);
  }

  async _logRodada(jogador, pista, pontuacaoDado) {
    const propriedade = {
      RETA: "velocidade",
      CURVA: "manobrabilidade",
      CONFRONTO: "poder",
    };

    console.log(
      `${
        jogador.nome
      } 🎲 rolou um dado de ${pista} garantindo ${pontuacaoDado} pontos, pontuando no total ${
        jogador.pontuacaoRodada
      } (${jogador[propriedade[pista]]} + ${pontuacaoDado}) pontos.`
    );
  }

  async _pontuarJogador() {
    if (this.jogador1.pontuacaoRodada === this.jogador2.pontuacaoRodada) {
      console.log(`Empate!\n`);
    }

    if (this.jogador1.pontuacaoRodada > this.jogador2.pontuacaoRodada) {
      this.jogador1.pontuar();
      console.log(`🏆 ${this.jogador1.nome} venceu a rodada!\n`);
    }

    if (this.jogador1.pontuacaoRodada < this.jogador2.pontuacaoRodada) {
      this.jogador2.pontuar();
      console.log(`🏆 ${this.jogador2.nome} venceu a rodada!\n`);
    }
  }
}
