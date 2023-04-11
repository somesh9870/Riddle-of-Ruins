import React, { useEffect, useState } from "react";
import consoleImg from "../Assets/game_console.mp4";
import "./Button.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Console = () => {
  const [data, setData] = useState([]);

  const getUserData = async () => {
    let id = sessionStorage.getItem("userID");
    try {
      let res = await axios.get(
        `https://smoggy-fawn-bonnet.cyclic.app/user/${id}`
      );
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  useEffect(() => {
    getUserData();
  });

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      className="flex justify-center items-center h-screen"
    >
      <video
        loop
        autoPlay={true}
        preload="auto"
        muted
        style={{ width: "100%" }}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={consoleImg} type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "80%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: "20px",
        }}
      >
        <h1 className="text-white p-4 text-2xl">Level: 1</h1>
        <h1 className="text-white p-4 text-2xl">
          Player: {localStorage.getItem("username")}
        </h1>
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="grid grid-cols-2 gap-12">
          <button>
            <Link to={"/map1"}>New Game</Link>{" "}
          </button>
          <button>
            <Link to={"/map2"}>Continue</Link>
          </button>
          <button
            onClick={() => {
              alert("Page Underconstruction");
            }}
          >
            Help
          </button>
          <button>
            <Link to={"/leaderboard"}>Leaderboard</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Console;
