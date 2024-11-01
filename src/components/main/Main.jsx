import { useState } from "react";
import Available from "../available/Available";
import Selected from "../Selected/Selected";

const Main = () => {
  // const [toggle,setToggle] = useState("Available") 
  const [toggle,setToggle] = useState({
    button: "Available",
    Available: true

  }) 
  console.log(toggle.button);
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

  return (
    <main className='w-10/12 sm:w-10/12 lg:w-4/5 mx-auto mt-12 space-y-12'>
      <div className="flex justify-between items-center">
      <h2 className="sm:text-xl font-bold leading-9 text-color1">Available Players</h2>
      <div>
        <button onClick={() => handleToggle("Available")} className={`${toggle.Available ? "bg-color2 border-l border-t border-b px-5 py-2 rounded-l-xl":"border-l border-t border-b px-5 py-2 rounded-l-xl"}`}>Available</button>
        <button onClick={() => handleToggle("Selected")} className={`${toggle.Available ? "border-t border-b border-r px-5 py-2 rounded-r-xl":"bg-color2 border-t border-b border-r px-5 py-2 rounded-r-xl"}`}>Selected</button>       
      </div>
      </div>
      {
        (toggle.button === "Available") ? <Available></Available> : <Selected></Selected>
      }
    </main>
  );
};

export default Main;