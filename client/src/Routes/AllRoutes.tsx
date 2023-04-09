import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import User from "../Pages/User";
import Console from "../Pages/Console";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
        <Route path="/console" element={<Console />} />
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
