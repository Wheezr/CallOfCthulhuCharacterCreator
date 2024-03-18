import "./Physical.css";
import Dot from "../Dot";
import { useState } from "react";
import "../Dot.css"
import produce from "immer";

let strengthInit = [
  'dot', 'undot', 'undot', 'undot'
];

let dexterityInit = [
  'dot', 'dot', 'undot', 'undot'
];

export default function Physical() {
  const [strengths, setStrength] = useState(strengthInit);
  const [dexterity, setDexterity] = useState([true, false, false, false]);
  const [stamina, setStamina] = useState([false, false, false, false]);

  function pressDot(index: number, array: string[]) {
    const dot = array.map((c, i) => {
      if (i === index && c === 'dot') {
        return 'undot';
      } else if (i === index && c === 'undot') {
        return 'dot';
      } else {
        return c;
      }
    });
    setStrength(dot);
  }

  return (
    <>
      <h1>Physical</h1>
      <div className="container">
        <h2>Strength</h2>
        <hr></hr>
        <span className="dot"></span>
        <div style={{display: "inline-block"}}>
          {strengths.map((item, index) => <span className={item} onClick={() =>
            pressDot(index, strengths)
          }></span>)}
        </div>
      </div>
      {/* <div className="container">
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
      </div> */}
    </>
  )
};