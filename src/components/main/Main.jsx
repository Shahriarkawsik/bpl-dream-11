import { useState } from "react";
import Available from "../available/Available";
import SelectedPlayers from "../selectedPlayers/selectedPlayers";
import SubscribeSection from "../subscribe-section/SubscribeSection";
import  PropTypes  from 'prop-types';
import { Alert } from "../alerts/Alert";

const Main = ({handleBuyPlayer,addCredit}) => {
  const [toggle,setToggle] = useState({
    button: "Available",
    Available: true
  }); 

  const handleToggle = (btn) => {
    if(btn === "Available"){
      setToggle({
        button: "Available",
        Available: true    
      })
    }
    else{
      setToggle({
        button: "Selected",
        Available: false
    
      })
    }
  };
  const [selectedPlayers,setSelectedPlayers] = useState([]);

  function handleSelectedPlayer (choosedPlayer){
    const {name,price}=choosedPlayer;
    //check have available balance
    if(price > addCredit ){
      Alert(false, "Not enough money to buy this player.Claim some Credit");
    } else if(selectedPlayers.includes(choosedPlayer)){
      Alert(false, "Player already selected");
    } else if(selectedPlayers.length > 5){
      Alert(false, "Squad is full!");
    }else{
      setSelectedPlayers([...selectedPlayers,choosedPlayer]);
      handleBuyPlayer(price);
      // Alert(true, "Successfully brought!");
      Alert(true, `Congrates!! ${name} is now in tour squad.`);
    }
  }
  return (
    <main className='w-10/12 sm:w-10/12 lg:w-4/5 mx-auto mt-12  space-y-10'>
      <div className="flex justify-between items-center">      
      <h2 className="text-xs sm:text-xl font-bold leading-9 text-color1">
      {
        (toggle.button === "Available") ? "Available Players" : `Selected Players (${selectedPlayers.length}/6)`
      }
      </h2>
      <div className="flex items-center">
        <button onClick={() => handleToggle("Available")} className={`${toggle.Available ? "bg-color2 text-xs sm:text-xl border-l border-t border-b max-sm:px-3 sm:px-5 py-2 rounded-l-xl":"text-xs sm:text-xl border-l border-t border-b max-sm:px-3 sm:px-5 py-2 rounded-l-xl"}`}>Available</button>
        <button onClick={() => handleToggle("Selected")} className={`${toggle.Available ? "text-xs sm:text-xl border-t border-b border-r max-sm:px-3 sm:px-5 py-2 rounded-r-xl":"bg-color2 text-xs sm:text-xl border-t border-b border-r max-sm:px-3 sm:px-5 py-2 rounded-r-xl"}`}>Selected ({selectedPlayers.length})</button>
      </div>
      </div>      
      {
        (toggle.button === "Available") ? <Available         
        handleSelectedPlayer={handleSelectedPlayer}></Available> : <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
      } 
      <div className="rounded-lg relative h-80">
        <SubscribeSection/>
      </div>     
    </main>
  );
};
Main.propTypes ={
  addCredit: PropTypes.number.isRequired,
  handleBuyPlayer: PropTypes.func.isRequired,
}

export default Main;