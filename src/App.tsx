// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="card">
        <Navbar />
        <div className="coverDiv">
          <div className="textDiv ">
            <h2 className="cardText">
              Dribble : <span id="ball">BasketBall</span> Score{" "}
            </h2>
          </div>
          <div className="imageDiv">
            <img src="src\assets\mamba.png" alt="mamba" className="mamba" />
            <img src="src\assets\mj.png" alt="mj" className="mj posmj" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="card">
        <Navbar />
        <div className="textDiv">
          <h2>
            Dribble : <span id="ball">BasketBall</span> Score{" "}
          </h2>
        </div>
        <div>
          <img src="./assets/basket.png" alt="" />
        </div>
      </div> */
}
