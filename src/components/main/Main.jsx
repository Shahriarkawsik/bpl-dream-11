import { useState } from "react";
import Available from "../available/Available";
import SelectedPlayers from "../selectedPlayers/selectedPlayers";

const Main = () => {
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
    setSelectedPlayers([...selectedPlayers,choosedPlayer]);
  }
  console.log(selectedPlayers);
  return (
    <main className='w-10/12 sm:w-10/12 lg:w-4/5 mx-auto mt-12 space-y-12'>
      <div className="flex justify-between items-center">
      {/* <h2 className="text-xs sm:text-xl font-bold leading-9 text-color1">Available Players</h2> */}
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
        (toggle.button === "Available") ? <Available handleSelectedPlayer={handleSelectedPlayer}></Available> : <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
      }
      
    </main>
  );
};

export default Main;