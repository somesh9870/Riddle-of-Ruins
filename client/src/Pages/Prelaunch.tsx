import React from "react";
import Launch from "../Assets/pre1.mp4";

const Prelaunch = () => {
  return (
    <div>
      <h1>hello</h1>
      <video loop preload="auto">
        <source src={"../Assets/pre1.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default Prelaunch;
