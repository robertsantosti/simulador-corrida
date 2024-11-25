import { Dado } from "./dado.js";
import { Bowser, DonkeyKong, Luigi, Mario, Peach, Yoshi } from "./jogador.js";
import { Jogar } from "./jogar.js";

const QUANTIDADE_RODADAS = 5;

const jogadores = [Mario, Luigi, Yoshi, Bowser, DonkeyKong, Peach];

const valorDadoJogadorSelecionado = Dado.rolar() - 1;

const JOGADOR_1 = jogadores[valorDadoJogadorSelecionado];
let JOGADOR_2 = jogadores[Dado.rolar() - 1];

do {
  JOGADOR_2 = jogadores[Dado.rolar() - 1];
} while (JOGADOR_1 === JOGADOR_2);

const main = async () => {
  const jogarCorrida = new Jogar(JOGADOR_1, JOGADOR_2);

  await jogarCorrida.inicio();

  for (let rodada = 1; rodada <= QUANTIDADE_RODADAS; rodada++) {
    await jogarCorrida.disputarCorrida(rodada);
  }

  await jogarCorrida.finalizar();
};

main();
