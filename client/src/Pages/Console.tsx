import React from "react";
import consoleImg from "../Assets/game_console.mp4";
import './Button.css'


const Console = () => {

  return (
    <div style={{position: 'relative',overflow: 'hidden'}} className="flex justify-center items-center h-screen">

    <video loop autoPlay={true} preload="auto" muted style={{width: '100%'}} className="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src={consoleImg} type="video/mp4" />
    </video>

    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <div className="grid grid-cols-2 gap-12">
        <button onClick={()=>{alert("clicked")}}>New Game</button>
        <button onClick={()=>{alert("clicked")}}>Continue</button>
        <button onClick={()=>{alert("clicked")}}>Help</button>
        <button onClick={()=>{alert("clicked")}}>Leaderboard</button>
      </div>
    </div>

  </div>
   
  );
};

export default Console;


