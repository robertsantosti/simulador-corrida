import { Dado } from "./dado.js";
import { Bowser, DonkeyKong, Luigi, Mario, Peach, Yoshi } from "./jogador.js";
import { Jogar } from "./jogar.js";

const QUANTIDADE_RODADAS = 5;

const jogadores = [Mario, Luigi, Yoshi, Bowser, DonkeyKong, Peach];

const JOGADOR_1 = jogadores[Math.floor(Math.random() * jogadores.length)];
const jogadoresRestantes = jogadores.filter((jogador) => jogador !== JOGADOR_1);

console.log({
  jogadorSelecionado: JOGADOR_1.nome,
  jogadoresRestantes: jogadoresRestantes.map((jogador) => jogador.nome),
});

const JOGADOR_2 =
  jogadoresRestantes[Math.floor(Math.random() * jogadoresRestantes.length)];

const main = async () => {
  const jogarCorrida = new Jogar(JOGADOR_1, JOGADOR_2);

  await jogarCorrida.inicio();

  for (let rodada = 1; rodada <= QUANTIDADE_RODADAS; rodada++) {
    await jogarCorrida.disputarCorrida(rodada);
  }

  await jogarCorrida.finalizar();
};

main();
