import { useState } from "react";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameArr, setGameArr] = useState(intialGameBoard);
  function handleSymbols(rowIndex, colIndex) {
    setGameArr((preArr) => {
      const newArr = [...preArr.map((pre) => [...pre])];
      newArr[rowIndex][colIndex] = "X";
      return newArr;
    });
  }
  return (
    <ol id="game-board">
      {gameArr.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSymbols(rowIndex, colIndex)}>
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
