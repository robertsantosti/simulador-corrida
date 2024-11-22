import { Luigi, Mario } from "./jogador.js";
import { Jogar } from "./jogar.js";

const QUANTIDADE_RODADAS = 5;

const main = async () => {
  const jogarCorrida = new Jogar(Mario, Luigi);

  await jogarCorrida.inicio();

  for (let rodada = 1; rodada <= QUANTIDADE_RODADAS; rodada++) {
    await jogarCorrida.disputarCorrida(rodada);
  }

  await jogarCorrida.finalizar();
};

main();
