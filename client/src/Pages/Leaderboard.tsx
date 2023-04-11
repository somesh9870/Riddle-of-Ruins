import Launch from "../Assets/Leaderboard.mp4";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const LeaderBoard = () => {
  const [data, setData] = useState<any>([]);

  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/console");
  };

  const getUserData = async () => {
    try {
      let res = await axios.get(
        `https://smoggy-fawn-bonnet.cyclic.app/user/leaderboard`
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
  }, []);

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      className="flex justify-center items-center h-screen"
    >
      <video
        autoPlay={true}
        preload="auto"
        muted
        style={{ width: "100%" }}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={Launch} type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          border: "3px solid #d48a0d",
          width: "25%",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {data.length > 0 &&
          data.map((e: any) => {
            return (
              <>
                <div
                  style={{
                    borderBottom: "2px solid #d48a0d",
                    margin: "30px",
                    borderRadius: "15px",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <h1>Name: {e.username}</h1>
                  <h1>Score: {e.score}</h1>
                </div>
              </>
            );
          })}
      </div>
      <div
        className="grid grid-cols-2 gap-12"
        style={{
          position: "absolute",
          top: "70%",
          left: "55%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button onClick={handleClick}>Next</button>
      </div>
    </div>
  );
};

export default LeaderBoard;
