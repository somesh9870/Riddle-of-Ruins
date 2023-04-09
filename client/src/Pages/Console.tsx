import React from "react";
import consoleImg from "../Assets/Gaming_Console_page.jpg";

const Console = () => {
  return (
    <div
      className="flex flex-row justify-center items-center h-screen"
      style={{ backgroundImage: `url(${consoleImg})`, backgroundSize: "cover" }}
    >
      <div className="bg-opacity-50 bg-cover bg-center flex flex-col justify-center items-center relative">
        <div className="flex flex-row justify-center items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-l-full rounded-t-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            New Game
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-r-full rounded-t-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Continue
          </button>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-l-full rounded-b-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Leaderboard
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-r-full rounded-b-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Help
          </button>
        </div>
      </div>
    </div>

    // <div
    //   className="flex flex-col justify-center items-center h-screen"
    //   style={{
    //     backgroundImage: `url(${consoleImg})`,
    //     backgroundSize: "cover",
    //   }}
    // >
    //   <div
    //     className="bg-opacity-50 bg-cover bg-center flex flex-row justify-center items-center relative"
    //     style={{ backgroundImage: `url(${consoleImg})` }}
    //   >
    //     <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l-full rounded-t-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 absolute bottom-0 left-0">
    //       New Game
    //     </button>
    //     <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-r-full rounded-t-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 absolute bottom-0 left-16">
    //       Continue
    //     </button>
    //     <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-l-full rounded-b-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 absolute bottom-8 left-0">
    //       Leaderboard
    //     </button>
    //     <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-r-full rounded-b-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 absolute bottom-8 left-16">
    //       Help
    //     </button>
    //   </div>
    // </div>
  );
};

export default Console;
