import { useState } from "react";

export default function GameBoard({ onChangePlayer, board }) {
  // const [gameArr, setGameArr] = useState(intialGameBoard);

  // function handleSymbols(rowIndex, colIndex) {
  //   setGameArr((preArr) => {
  //     const newArr = [...preArr.map((pre) => [...pre])];
  //     newArr[rowIndex][colIndex] = symbol;
  //     return newArr;
  //   });
  //   onChangePlayer();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onChangePlayer(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
