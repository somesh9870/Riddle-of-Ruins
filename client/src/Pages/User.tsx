import React from "react";
import homeimg from "../Assets/Landing_Page.png";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogInClick = () => {
    navigate("/login");
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${homeimg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex space-x-4 mt-80">
        <button
          className="bg-red-900 hover:bg-red-800 text-yellow-500 font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSignUpClick}
        >
          Sign Up
        </button>
        <button
          className="bg-gray-700 hover:bg-gray-800 text-yellow-500 font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogInClick}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default UserPage;
