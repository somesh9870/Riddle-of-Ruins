import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import music from "./Assets/music.mp3";

function App() {
  const audio = new Audio(music);
  audio.loop = true;
  audio.play();
  return (
    <div className="App  h-screen ">
      <AllRoutes />
    </div>
  );
}

export default App;
