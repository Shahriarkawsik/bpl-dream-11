import PropTypes from "prop-types";

import SelectedPlayer from "../selectedPlayer/SelectedPlayer";

const SelectedPlayers = ({selectedPlayers}) => {
  // console.log(selectedPlayers);
  return (
    <div className="space-y-4">
      {
        selectedPlayers.map((selectedPlayer) => <SelectedPlayer 
        key={selectedPlayer.id}
        selectedPlayer={selectedPlayer}
        ></SelectedPlayer>)
      }
    </div>
    
  );
};
SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array.isRequired, 
}
export default SelectedPlayers;