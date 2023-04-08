import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App cursor-wait h-screen ">
      <h1 className="text-3xl font-bold underline">
        Hello world!
        <div className="h-screen flex justify-center items-center cursor-custom">
          <p>Hover over me to see the custom cursor!</p>
        </div>
      </h1>
    </div>
  );
}

export default App;
