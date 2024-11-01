import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayer = ({selectedPlayer}) => {

    const {img,name,batting_style} = selectedPlayer;

  return (
    <div className="border p-4 flex justify-between items-center rounded-xl">
      <div className="flex items-center gap-3">
        <img className="w-14 h-14 rounded-full" src={img} alt="" />
        <div>
          <h2 className="text-2xl font-semibold leading-7">{name}</h2>
          <p>{batting_style}</p>
        </div>
      </div>
      <RiDeleteBin6Line />
    </div>
  );
};
SelectedPlayer.propTypes = {
  selectedPlayer: PropTypes.object.isRequired, 
}
export default SelectedPlayer;