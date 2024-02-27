import "./Physical.css"
import { useState } from "react";
import Dot from "../Dot";
import "../Dot.css"
import Circle from "../Circle";

function Physical() {
  const [dotVisible, setDotVisibility] = useState(false);
  const selectDot = () => setDotVisibility(true);
  const unselectDot = () => setDotVisibility(false);

  return (
  <>
    <h1>Physical</h1>
    <div className="container">
      <h2>Strength</h2>
      <hr></hr>
      <span className="dot"></span>
      {dotVisible === true && <Dot onClick={unselectDot}/> || <Circle onClick={selectDot}/>}
      <span className="circle"></span>
      <span className="circle"></span>
      <span className="circle"></span>
    </div>
    <div className="container">
      <h2>Dexterity</h2>
      <hr></hr>
      <span className="dot"></span>
      <span className="circle"></span>
      <span className="circle"></span>
      <span className="circle"></span>
      <span className="circle"></span>
    </div>
    <div className="container">
      <h2>Stamina</h2>
      <hr></hr>
      <span className="dot"></span>
      <span className="circle"></span>
      <span className="circle"></span>
      <span className="circle"></span>
      <span className="circle"></span>
    </div>
  </>
  )
};

export default Physical;