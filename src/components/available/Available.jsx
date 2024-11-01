import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";

const Available = ({handleSelectedPlayer}) => {
  const [players,setPlayers] = useState([]);
  useEffect(() => {
    fetch('/players.json')
    .then(responses => responses.json())
    .then(data => setPlayers(data))
  },[])


  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
      {
        players.map(player => <Player key={player.id}
           player={player}
           handleSelectedPlayer={handleSelectedPlayer}
           ></Player>)
      }
    </div>
  );
};

Available.propTypes = {  
  handleSelectedPlayer: PropTypes.object.isRequired,
}
export default Available;