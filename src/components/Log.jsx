export default function Log({ turn }) {
  for (const turns of turn) {
    const { squares, player } = turns;
    const { row, col } = squares;
    let activePlayer = player === "X" ? "Player 1" : "Player 2";
  }
  return <ol id="log"></ol>;
}
