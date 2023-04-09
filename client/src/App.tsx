import React from "react";
import "./App.css";
import Login from "./Pages/Login";
import { Sign } from "crypto";
import Signup from "./Pages/Signup";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App  h-screen ">
      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
      <div className="h-screen flex justify-center items-center cursor-custom">
      <p>Hover over me to see the custom cursor!</p>
    </div>
    </h1> */}
      {/* <Login/>
    <Signup /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
