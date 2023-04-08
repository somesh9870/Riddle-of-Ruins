import React from "react";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element />
        <Route path="/login" element />
        <Route path="/signup" element />
        <Route path="/console" element />
        <Route path="/leaderboard" element />
        <Route path="/lose" element />
        <Route path="/win" element />
        <Route path="/map1" element />
        <Route path="/map2" element />
        <Route path="/map3" element />
        <Route path="/map4" element />
        <Route path="/prelaunch1" element />
        <Route path="/prelaunch2" element />
        <Route path="/prelaunch3" element />
        <Route path="/prelaunch4" element />
      </Routes>
    </div>
  );
};

export default AllRoutes;
