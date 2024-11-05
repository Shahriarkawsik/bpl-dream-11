import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayer = ({selectedPlayer,handleDeleteSelectedPlayers}) => {

    const {img,name,batting_style,id} = selectedPlayer;

  return (
    <div className="border p-4 flex justify-between items-center rounded-xl">
      <div className="flex items-center gap-3">
        <img className="w-14 h-14 rounded-full" src={img} alt="" />
        <div>
          <h2 className="text-base lg:text-2xl font-semibold leading-7">{name}</h2>
          <p className="max-sm:text-xs sm:text-base">{batting_style}</p>
        </div>
      </div>
      <button onClick={() => handleDeleteSelectedPlayers(id)}>
      <RiDeleteBin6Line />
      </button>
    </div>
  );
};
SelectedPlayer.propTypes = {
  selectedPlayer: PropTypes.object.isRequired, 
}
export default SelectedPlayer;