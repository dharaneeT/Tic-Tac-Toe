import { useState } from "react";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onChangePlayer, turn }) {
  let gameArr = intialGameBoard;
  for (const gTurn of turn) {
    const { squares, player } = gTurn;
    const { row, col } = squares;
    gameArr[row][col] = player;
  }

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
      {gameArr.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onChangePlayer(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
