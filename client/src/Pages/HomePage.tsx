import React from "react";
import { FallingLines } from "react-loader-spinner";
import homeimg from "../Assets/Landing_Page.png";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  // const buttonStyles = {
  //   backgroundColor: "#6b88d6",
  //   color: "#fff",
  //   padding: "1rem 2rem",
  //   borderRadius: "0.5rem",
  //   fontWeight: "bold",
  //   marginTop: "100%",
  // };

  const handleHomePageClick = () => {
    navigate("/user");
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${homeimg})`,
        backgroundSize: "cover",
        opacity: isLoading ? 0.8 : 1,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          <FallingLines color="purple" width="100" visible={true} />
        ) : (
          <div style={{marginTop:"450%"}}>
          
            <button className="button" onClick={handleHomePageClick}>
              <span className="actual-text">&nbsp;PLAY&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;PLAY&nbsp;
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
