<h1>Node Kart.JS</h1>

<table>
  <thead>
    <tr>
      <th>Jogadores</th>
      <th>Objetivo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="./assets/img/header.gif" alt="Jogadores disponiveis" width="200"/>
      </td>
      <td>
        <span>Criação de um sistema utilizando como tecnologia o Javascript com NodeJS para simular corridas de Mario Kart, levando em consideração as regras e mecanicas a seguir.</span>
      </td>
    </tr>
  </tbody>
</table>

---

<h2>Regras de negócio</h2>

1. O computador selecionara automaticamente 2 (dois) pesonagens para disputar a corrida
   - O computador não pode selecionar os 2 jogadores sendo o mesmo personagem
2. Quando a corrida iniciar os jogadores devem correr em pistas aleatorias em 5 rodadas
   - O jogador deve jogar um dado de 6 lados
   - Caso a pista seja do tipo `RETA` somar o valor retirado no dado com o atributo `velocidade` do personagem.
   - Caso a pista seja do tipo `CURVA` somar o valor retirado no dado com o atributo `manobrabilidade` do personagem.
   - Caso a pista seja do tipo `CONFRONTO` somar o valor retirado no dado com o atributo `poder` do personagem.
3. Em caso do tipo de pista `CONFRONTO`
   - Caso o tipo de confronto seja `CASCO`
     - O perdedor deve peder 1 ponto
   - Caso o tipo de confronto seja `BOMBA`
     - O perdedor deve peder 2 pontos
4. Ao final de cada rodada
   - O ganhador deve ganhar 1 (um) ponto
   - Em caso de empate nenhum dos jogadores ganham pontos
5. Nenhum jogador pode ter a pontuação negativa
6. O jogador que mais pontuar será quem ganhou a corrida

<h2>Jogadores disponiveis</h2>

<table>
  <thead>
    <tr>
      <th>Jogador</th>
      <th>Nome</th>
      <th>Status</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <img src="./assets/img/mario.gif" alt="Mario" width="60">
      </td>
      <td>
        Mario
      </td>
      <td>
        <div>
          <p>Velocidade: 4</p>
          <p>Manobrabilidade: 5</p>
          <p>Poder: 3</p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <img src="./assets/img/peach.gif" alt="Peach" width="60">
      </td>
      <td>
        Peach
      </td>
      <td>
        <div>
          <p>Velocidade: 3</p>
          <p>Manobrabilidade: 4</p>
          <p>Poder: 2</p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <img src="./assets/img/yoshi.gif" alt="Yoshi" width="60">
      </td>
      <td>
        Yoshi
      </td>
      <td>
        <div>
          <p>Velocidade: 2</p>
          <p>Manobrabilidade: 4</p>
          <p>Poder: 3</p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <img src="./assets/img/bowser.gif" alt="Bowser" width="60">
      </td>
      <td>
        Bowser
      </td>
      <td>
        <div>
          <p>Velocidade: 5</p>
          <p>Manobrabilidade: 2</p>
          <p>Poder: 5</p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <img src="./assets/img/luigi.gif" alt="Luigi" width="60">
      </td>
      <td>
        Luigi
      </td>
      <td>
        <div>
          <p>Velocidade: 3</p>
          <p>Manobrabilidade: 4</p>
          <p>Poder: 4</p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <img src="./assets/img/dk.gif" alt="Donkey Kong" width="60">
      </td>
      <td>
        Donkey Kong
      </td>
      <td>
        <div>
          <p>Velocidade: 2</p>
          <p>Manobrabilidade: 2</p>
          <p>Poder: 5</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
