import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Available = () => {
  const [players,setPlayers] = useState([]);
  useEffect(() => {
    fetch('/players.json')
    .then(responses => responses.json())
    .then(data => setPlayers(data))
  },[])
  console.log(players);

  return (
    <div className="w-full border grid grid-cols-1 lg:grid-cols-3 gap-4">
      {
        players.map(player => <Player key={player.id} player={player}></Player>)
      }
    </div>
  );
};

export default Available;