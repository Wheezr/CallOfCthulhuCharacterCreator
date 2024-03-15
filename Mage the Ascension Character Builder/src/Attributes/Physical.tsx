import "./Physical.css";
import Dot from "../Dot";
import { useState } from "react";
import "../Dot.css"

function Physical() {
  const [strength, setStrength] = useState([true, false, false, false]);
  const [dexterity, setDexterity] = useState([true, false, false, false]);
  const [stamina, setStamina] = useState([false, false, false, false]);
  
  return (
  <>
    <h1>Physical</h1>
    <div className="container">
      <h2>Strength</h2>
      <hr></hr>
      <span className="dot"></span>
      <div style={{display: "inline-block"}}>
        {strength.map((item, index) => <Dot key={index} dotState={item} onClick={console.log(index)}></Dot>)}
      </div>
    </div>
    <div className="container">
      <h2>Dexterity</h2>
      <hr></hr>
      <span className="dot"></span>
      <div style={{display: "inline-block"}}>
        {dexterity.map((item, index) => <Dot key={index} dotState={item} onClick={console.log(index)}></Dot>)}
      </div>
    </div>
    <div className="container">
      <h2>Stamina</h2>
      <hr></hr>
      <span className="dot"></span>
      <div style={{display: "inline-block"}}> 
        {stamina.map((item, index) => <Dot key={index} dotState={item} onClick={console.log(index)}></Dot>)}
      </div>
    </div>
  </>
  )
};

export default Physical;