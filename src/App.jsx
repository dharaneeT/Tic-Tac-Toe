import Player from "./components/Player";

function App() {
  return (
    <menu>
      <div id="game-container">
        <ol id="players">
          <Player
            nameClass="player-name"
            symbolClass="player-symbol"
            name="Player 1"
            symbol="X"
          ></Player>

          <Player
            nameClass="player-name"
            symbolClass="player-symbol"
            name="Player 2"
            symbol="O"
          ></Player>
        </ol>
      </div>
    </menu>
  );
}

export default App;
