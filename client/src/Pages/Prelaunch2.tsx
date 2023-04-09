import React from "react";
import Launch from "../Assets/pre2.mp4";
import { useNavigate } from "react-router-dom";

const Prelaunch2 = () => {
    const Navigate= useNavigate()
    const handleClick= ()=>{
      Navigate("/prelaunch3")
    }
  return (
    <div style={{position: 'relative',overflow: 'hidden'}} className="flex justify-center items-center h-screen">
     
      <video  autoPlay={true} preload="auto" muted style={{width: '100%'}} className="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src={Launch} type="video/mp4" />
    </video>
    <div style={{position: 'absolute', top: '90%', left: '70%', transform: 'translate(-50%, -50%)'}}>
      <div className="grid grid-cols-2 gap-12">
        <button  onClick={handleClick}>Next</button>
      </div>
    </div>
    </div>
  );
};

export default Prelaunch2;