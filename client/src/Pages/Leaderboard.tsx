import Launch from "../Assets/Leaderboard.mp4";
import { useNavigate } from "react-router-dom";

const LeaderBoard = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/console");
  };
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
        }}
      >
        <div
          style={{
            border: "3px solid #d48a0d",
            width: "400px",
            borderRadius: "15px",
          }}
        >
          <h1 style={{ fontSize: "34px", color: "white" }}>
            Top Three Players
            <hr />
          </h1>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              color: "white",
              fontWeight: 600,
              textAlign: "center",
              justifyContent: "space-around",
            }}
          >
            <h1>Name: Lufi</h1>
            <h1>Score: 300</h1>
          </div>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              color: "white",
              fontWeight: 600,
              textAlign: "center",
              justifyContent: "space-around",
            }}
          >
            <h1>Name: Zoro</h1>
            <h1>Score: 280</h1>
          </div>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              color: "white",
              fontWeight: 600,
              textAlign: "center",
              justifyContent: "space-around",
            }}
          >
            <h1>Name: Nami</h1>
            <h1>Score: 240</h1>
          </div>
          <br />
          <br />
        </div>
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
