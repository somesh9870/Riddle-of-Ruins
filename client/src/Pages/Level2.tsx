import levelImg from "../Assets/map4.png";
import obj1 from "../Assets/objects/axe.png";
import obj2 from "../Assets/objects/bulb.png";
import obj3 from "../Assets/objects/crown.png";
import obj4 from "../Assets/objects/egg.png";
import obj5 from "../Assets/objects/guitar.png";
import obj6 from "../Assets/objects/lantern.png";
import obj7 from "../Assets/objects/pen.png";
import obj8 from "../Assets/objects/ball.png";
import obj9 from "../Assets/objects/sword.png";
import obj10 from "../Assets/objects/umbrella.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Level2 = () => {
  const [score, setScore] = useState(0);
  const [ball, setBall] = useState(false);
  const [axe, setAxe] = useState(false);
  const [bulb, setBulb] = useState(false);
  const [crown, setCrown] = useState(false);
  const [egg, setEgg] = useState(false);
  const [guitar, setGuitar] = useState(false);
  const [lantern, setLantren] = useState(false);
  const [pen, setPen] = useState(false);
  const [sword, setSword] = useState(false);
  const [umbrella, setUmbrella] = useState(false);
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(63);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    let intervalId: any;

    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    if (score === 100) {
      navigate("/winner");
    }

    // if (seconds === 1 && score < 100) {
    //   navigate("/lose");
    // }

    return () => clearInterval(intervalId);
  }, [seconds]);
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${levelImg})`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            style={{
              position: "absolute",
              top: "0em",
              left: "35em",
              display: "flex",
            }}
          >
            <h1
              style={{ color: "white", fontSize: "24px", fontFamily: "serif" }}
            >
              {seconds === 0 ? "Time up!" : `Time remaining: ${seconds}s`}
            </h1>
            <br />
            <h1
              style={{
                color: "white",
                fontSize: "24px",
                fontFamily: "serif",
                marginLeft: "30px",
              }}
            >
              Score:{score}
            </h1>
          </div>

          <div
            style={{ position: "absolute", top: "9em", left: "24em" }}
            onClick={() => {
              setAxe(true);

              axe === false && setScore((prev) => prev + 10);
            }}
          >
            <img style={{ width: "40px", opacity: "60%" }} src={obj1} alt="#" />
          </div>
          <div
            style={{ position: "absolute", top: "28em", left: "54.5em" }}
            onClick={() => {
              setBulb(true);
              bulb === false && setScore((prev) => prev + 10);
            }}
          >
            <img style={{ width: "20px", opacity: "60%" }} src={obj2} alt="#" />
          </div>
          <div
            style={{ position: "absolute", top: "23.5em", left: "5.5em" }}
            onClick={() => {
              setCrown(true);
              crown === false && setScore((prev) => prev + 10);
            }}
          >
            <img style={{ width: "50px", opacity: "60%" }} src={obj3} alt="#" />
          </div>
          <div
            style={{ position: "absolute", top: "43em", left: "67em" }}
            onClick={() => {
              setEgg(true);
              egg === false && setScore((prev) => prev + 10);
            }}
          >
            <img style={{ width: "60px", opacity: "80%" }} src={obj4} alt="#" />
          </div>
          <div
            style={{ position: "absolute", top: "43em", left: "30em" }}
            onClick={() => {
              setGuitar(true);
              guitar === false && setScore((prev) => prev + 10);
            }}
          >
            <img
              style={{ width: "100px", opacity: "50%" }}
              src={obj5}
              alt="#"
            />
          </div>
          <div
            style={{ position: "absolute", top: "10em", left: "50em" }}
            onClick={() => {
              setLantren(true);
              lantern === false && setScore((prev) => prev + 10);
            }}
          >
            <img style={{ width: "20px", opacity: "60%" }} src={obj6} alt="#" />
          </div>
          <div
            style={{ position: "absolute", top: "40em", left: "19em" }}
            onClick={() => {
              setPen(true);
              pen === false && setScore((prev) => prev + 10);
            }}
          >
            <img style={{ width: "70px", opacity: "80%" }} src={obj7} alt="#" />
          </div>
          <div
            style={{ position: "absolute", top: "35em", left: "55em" }}
            onClick={() => {
              setBall(true);
              ball === false && setScore((prev) => prev + 10);
            }}
          >
            <img style={{ width: "40px", opacity: "50%" }} src={obj8} alt="#" />
          </div>
          <div
            style={{ position: "absolute", top: "25em", left: "46em" }}
            onClick={() => {
              setSword(true);
              sword === false && setScore((prev) => prev + 10);
            }}
          >
            <img style={{ width: "50px", opacity: "60%" }} src={obj9} alt="#" />
          </div>
          <div
            style={{ position: "absolute", top: "5em", left: "65em" }}
            onClick={() => {
              setUmbrella(true);
              umbrella === false && setScore((prev) => prev + 10);
            }}
          >
            <img
              style={{ width: "70px", opacity: "60%" }}
              src={obj10}
              alt="#"
            />
          </div>
          <div
            // className="absolute bottom-1 w-full h-2  border-red-500  hover:h-20 bg-cover bg-center backdrop-filter text-white"
            style={{
              position: "absolute",
              bottom: "0",
              backgroundColor: "#d48a0d",
              backgroundSize: "cover",
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              color: "white",
              fontWeight: "600",
            }}
          >
            {egg ? <h1 style={{ color: "red" }}>Egg</h1> : <h1>Egg</h1>}

            {umbrella ? (
              <h1 style={{ color: "red" }}>Umbrella</h1>
            ) : (
              <h1>Umbrella</h1>
            )}

            {crown ? <h1 style={{ color: "red" }}>Crown</h1> : <h1>Crown</h1>}

            {ball ? <h1 style={{ color: "red" }}>Ball</h1> : <h1>Ball</h1>}

            {axe ? <h1 style={{ color: "red" }}>Axe</h1> : <h1>Axe</h1>}

            {guitar ? (
              <h1 style={{ color: "red" }}>Guitar</h1>
            ) : (
              <h1>Guitar</h1>
            )}

            {lantern ? (
              <h1 style={{ color: "red" }}>Lantren</h1>
            ) : (
              <h1>Lantren</h1>
            )}

            {sword ? <h1 style={{ color: "red" }}>Sword</h1> : <h1>Sword</h1>}

            {bulb ? <h1 style={{ color: "red" }}>Bulb</h1> : <h1>Bulb</h1>}

            {pen ? <h1 style={{ color: "red" }}>Pen</h1> : <h1>Pen</h1>}
          </div>
        </>
      )}
    </div>
  );
};

export default Level2;
