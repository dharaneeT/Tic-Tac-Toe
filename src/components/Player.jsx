import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  //note excuting state for Naming and btn
  const [isEditing, setisEditing] = useState(false);
  //note inital state
  let editPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  //note onClick fn
  function handleEditBtn() {
    //note changing states
    setisEditing((pre) => !pre);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditBtn}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
