import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import User from "../Pages/User";
import Console from "../Pages/Console";
import Prelaunch from "../Pages/Prelaunch";
import Prelaunch2 from "../Pages/Prelaunch2";
import Prelaunch3 from "../Pages/Prelaunch3";
import Prelaunch4 from "../Pages/Prelaunch4";
import Level1 from "../Pages/Level1";
import Winner from "../Pages/Winner";
import Lose from "../Pages/Lose";
import LeaderBoard from "../Pages/Leaderboard";
import Level2 from "../Pages/Level2";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
        <Route path="/console" element={<Console />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/lose" element={<Lose />} />
        <Route path="/winner" element={<Winner />} />
        <Route path="/map1" element={<Level1 />} />
        <Route path="/map2" element={<Level2 />} />
        <Route path="/map3" element />
        <Route path="/map4" element />
        <Route path="/prelaunch" element={<Prelaunch />} />
        <Route path="/prelaunch2" element={<Prelaunch2 />} />
        <Route path="/prelaunch3" element={<Prelaunch3 />} />
        <Route path="/prelaunch4" element={<Prelaunch4 />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
