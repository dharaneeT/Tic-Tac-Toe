export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.squares.row}${turn.squares.col}`}>
          {turn.player} Selected {turn.squares.row},{turn.squares.col}
        </li>
      ))}
    </ol>
  );
}
