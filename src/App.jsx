import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [playerActive, setPlayerActive] = useState("X");

  function handlePlayerActive(rowIndex, colIndex) {
    setPlayerActive((curr) => (curr === "X" ? "O" : "X"));
    setGameTurn((preArr) => {
      let activePlayer = "X";
      if (gameTurn.length > 0 && gameTurn[0].player === "X") {
        activePlayer = "O";
      }
      const currArr = [
        { squares: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...preArr,
      ];
      return currArr;
    });
  }

  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={playerActive === "X"}
          ></Player>
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={playerActive === "O"}
          ></Player>
        </ol>
        <GameBoard turn={gameTurn} onChangePlayer={handlePlayerActive} />
      </div>
      <Log turn={gameTurn}></Log>
    </menu>
  );
}

export default App;
