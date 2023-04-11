import React from "react";
import "./App.css";

import AllRoutes from "./Routes/AllRoutes";
import music from "./Assets/music.mp3";

function App() {
  const audio = new Audio(music);
  audio.loop = true;
  audio.play();
  // <audio controls loop>
  //   <source src={music} type="audio/mpeg" />
  //   Your browser does not support the audio element.
  // </audio>;
  return (
    <div className="App  h-screen ">
      <AllRoutes />
    </div>
  );
}

export default App;
