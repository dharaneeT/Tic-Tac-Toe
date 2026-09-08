import Player from "./components/Player";

function App() {
  return (
    <menu>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X"></Player>
          <Player initialName="Player 2" symbol="O"></Player>
        </ol>
      </div>
    </menu>
  );
}

export default App;
