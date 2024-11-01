import PropTypes from "prop-types";
import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Player = ({player,handleSelectedPlayer}) => {

  const {img,name,team,role,batting_style,price} = player;
  return (
    <div className="h-fit p-3 sm:p-6 border border-color1.1 rounded-xl space-y-3">
      <img className="w-full h-64 border rounded-lg" src={img} alt="" />
      <div className="flex items-center gap-3">
        <FaUserAlt />
      <h2 className="text-color1 text-xl font-semibold">{name}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaFlag/>
          <p className="text-color1.7 leading-5">{team}</p>
        </div>
        <button className="bg-color1.05 text-color1 rounded-lg px-4 py-2">{role}</button>
      </div>
      <hr />
      <h2 className="text-color1 font-bold leading-5">Rating</h2>
      <div className="flex justify-between items-center">
        <h2 className="text-color1 font-semibold leading-5">{batting_style}</h2>
        <p className="text-color1.7 leading-5">{batting_style}</p>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-color1 font-semibold leading-5">Price: ${price}</h3>
        <button onClick={() => handleSelectedPlayer(player)} className="text-color1 rounded-lg px-4 py-2 border border-color1.1">Choose Player</button>
      </div>

    </div>
  );
};
Player.propTypes = {
  player: PropTypes.object.isRequired,
  handleSelectedPlayer: PropTypes.object.isRequired
}
export default Player;