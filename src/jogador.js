class Jogador {
  nome;
  velocidade;
  manobrabilidade;
  poder;
  pontuacaoTotal = 0;
  pontuacaoRodada = 0;

  constructor(nome, velocidade, manobrabilidade, poder) {
    this.nome = nome;
    this.velocidade = velocidade;
    this.manobrabilidade = manobrabilidade;
    this.poder = poder;
  }

  async pontuar(pontos = 1) {
    this.pontuacaoTotal += pontos;
  }

  async pontuarRodada(pontos) {
    this.pontuacaoRodada = pontos;
  }

  async perderPontos(pontos = 1) {
    this.pontuacaoTotal -= pontos;
  }

  async limparPontuacao() {
    this.pontuacaoTotal = 0;
  }

  async limparPontuacaoRodada() {
    this.pontuacaoRodada = 0;
  }
}

const Mario = new Jogador("Mario", 4, 5, 3);
const Peach = new Jogador("Peach", 3, 4, 2);
const Yoshi = new Jogador("Yoshi", 2, 4, 3);
const Bowser = new Jogador("Bowser", 5, 2, 5);
const Luigi = new Jogador("Luigi", 3, 4, 4);
const DonkeyKong = new Jogador("Donkey Kong", 2, 2, 5);

export { Mario, Peach, Yoshi, Bowser, Luigi, DonkeyKong };
