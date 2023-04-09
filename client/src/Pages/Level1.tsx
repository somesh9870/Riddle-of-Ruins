import levelImg from "../Assets/map1.png";
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
import { useState } from "react";

const Level1 = () => {
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

  const imgOpa = axe? "opacity-100" : "opacity-60

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${levelImg})`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div
        style={{ position: "absolute", top: "9em", left: "24em" }}
        onClick={() => {
          setAxe(true);
        }}
      >
        <img
          style={{ width: "40px", ${imgOpacity:"100":"60"} }}
          src={obj1}
          alt="#"
        />
      </div>
      <div
        style={{ position: "absolute", top: "28em", left: "54.5em" }}
        onClick={() => {
          setBulb(true);
        }}
      >
        <img style={{ width: "20px", opacity: "60%" }} src={obj2} alt="#" />
      </div>
      <div
        style={{ position: "absolute", top: "23.5em", left: "5.5em" }}
        onClick={() => {
          setCrown(true);
        }}
      >
        <img style={{ width: "50px", opacity: "60%" }} src={obj3} alt="#" />
      </div>
      <div
        style={{ position: "absolute", top: "43em", left: "67em" }}
        onClick={() => {
          setEgg(true);
        }}
      >
        <img style={{ width: "60px", opacity: "80%" }} src={obj4} alt="#" />
      </div>
      <div
        style={{ position: "absolute", top: "43em", left: "30em" }}
        onClick={() => {
          setGuitar(true);
        }}
      >
        <img style={{ width: "100px", opacity: "50%" }} src={obj5} alt="#" />
      </div>
      <div
        style={{ position: "absolute", top: "10em", left: "50em" }}
        onClick={() => {
          setLantren(true);
        }}
      >
        <img style={{ width: "20px", opacity: "60%" }} src={obj6} alt="#" />
      </div>
      <div
        style={{ position: "absolute", top: "40em", left: "19em" }}
        onClick={() => {
          setPen(true);
        }}
      >
        <img style={{ width: "70px", opacity: "80%" }} src={obj7} alt="#" />
      </div>
      <div
        style={{ position: "absolute", top: "35em", left: "55em" }}
        onClick={() => {
          setBall(true);
        }}
      >
        <img style={{ width: "40px", opacity: "50%" }} src={obj8} alt="#" />
      </div>
      <div
        style={{ position: "absolute", top: "25em", left: "46em" }}
        onClick={() => {
          setSword(true);
        }}
      >
        <img style={{ width: "50px", opacity: "60%" }} src={obj9} alt="#" />
      </div>
      <div
        style={{ position: "absolute", top: "5em", left: "65em" }}
        onClick={() => {
          setUmbrella(true);
        }}
      >
        <img style={{ width: "70px", opacity: "60%" }} src={obj10} alt="#" />
      </div>
    </div>
  );
};

export default Level1;
