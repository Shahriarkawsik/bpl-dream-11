import PropTypes from "prop-types";
import SelectedPlayer from "../selectedPlayer/SelectedPlayer";

const SelectedPlayers = ({selectedPlayers,handleDeleteSelectedPlayers,handleAvailablePlayersSection}) => {

  return (
    <div className="space-y-4">
      {
        selectedPlayers.map((selectedPlayer) => <SelectedPlayer 
        key={selectedPlayer.id}
        selectedPlayer={selectedPlayer}
        handleDeleteSelectedPlayers={handleDeleteSelectedPlayers}
        ></SelectedPlayer>)
      }
      <div className='border border-color1 inline-block p-2 rounded-xl sm:rounded-2xl'>
        <button onClick={()=> handleAvailablePlayersSection()} className='bg-color2 px-3 sm:px-5 py-2 sm:py-4 rounded-md sm:rounded-xl text-color1 font-bold text-xs sm:text-xl'>Add More Player</button>
      </div>
    </div>
    
  );
};
SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array.isRequired, 
  handleDeleteSelectedPlayers: PropTypes.array.isRequired, 
  handleAvailablePlayersSection: PropTypes.func.isRequired, 
}
export default SelectedPlayers;