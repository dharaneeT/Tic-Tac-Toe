import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination.js";
import GameOver from "./components/GameOver.jsx";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(game) {
  let activePlayer = "X";
  if (game.length > 0 && game[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

function App() {
  let winner;
  const [gameTurn, setGameTurn] = useState([]);
  // const [playerActive, setPlayerActive] = useState("X");
  let gameBoard = structuredClone(intialGameBoard);
  for (const Turn of gameTurn) {
    const { squares, player } = Turn;
    const { row, col } = squares;
    gameBoard[row][col] = player;
  }

  let activePlayer = deriveActivePlayer(gameTurn);
  const hasDraw = gameTurn.length === 9 && !winner;
  function handlePlayerActive(rowIndex, colIndex) {
    setGameTurn((preArr) => {
      let currentPlayer = deriveActivePlayer(preArr);

      const currArr = [
        { squares: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...preArr,
      ];
      return currArr;
    });
  }

  function handleRematch() {
    setGameTurn([]);
  }

  for (const combination of WINNING_COMBINATIONS) {
    const first = gameBoard[combination[0].row][combination[0].column];
    const second = gameBoard[combination[1].row][combination[1].column];
    const third = gameBoard[combination[2].row][combination[2].column];

    if (first && first === second && first === third) {
      winner = first;
    }
  }

  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          ></Player>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRematch={handleRematch} />
          )}
        </ol>
        <GameBoard board={gameBoard} onChangePlayer={handlePlayerActive} />
      </div>
      <Log turns={gameTurn}></Log>
    </menu>
  );
}

export default App;
