import "./Physical.css";
import { Dispatch, SetStateAction, useState } from "react";
import "../Dot.css";
import React from "react";

let strengthInit = ["undot", "undot", "undot", "undot"];

let dexterityInit = ["dot", "undot", "undot", "undot"];

let staminaInit = ["dot", "dot", "undot", "undot"];

export default function Physical() {
  const [strengths, setStrength] = useState(strengthInit);
  const [dexteritys, setDexterity] = useState(dexterityInit);
  const [staminas, setStamina] = useState(staminaInit);

  function pressDot(index: number,
                    array: string[],
                    action: Dispatch<SetStateAction<string[]>>
                   ) {
    const dot = array.map((c, i) => {
      if (i === index && c === "dot") {
        return "undot";
      } else if (i === index && c === "undot") {
        return "dot";
      } else {
        return c;
      }
    });
    action(dot);
  }

  const dotLength = (array1: string[], array2: string[], array3: string[]) => {
    let len = 0;
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] === "dot") {
        len++;
      }
    }
    for (var i = 0; i < array2.length; i++) {
      if (array2[i] === "dot") {
        len++;
      }
    }
    for (var i = 0; i < array3.length; i++) {
      if (array3[i] === "dot") {
        len++;
      }
    }
    return len;
  };

  return (
    <>
      <div className="attributeContainer">
        <h1>Physical</h1>
        <div className="container">
          <h2>Strength</h2>
          <hr></hr>
          <span className="dot"></span>
          <div style={{ display: "inline-block" }}>
            {strengths.map((item, index) => (
              <span
                className={item}
                onClick={() => pressDot(index, strengths, setStrength)}
              ></span>
            ))}
          </div>
        </div>
        <div className="container">
          <h2>Dexterity</h2>
          <hr></hr>
          <span className="dot"></span>
          <div style={{ display: "inline-block" }}>
            {dexteritys.map((item, index) => (
              <span
                className={item}
                onClick={() => pressDot(index, dexteritys, setDexterity)}
              ></span>
            ))}
          </div>
        </div>
        <div className="container">
          <h2>Stamina</h2>
          <hr></hr>
          <span className="dot"></span>
          <div style={{ display: "inline-block" }}>
            {staminas.map((item, index) => (
              <span
                className={item}
                onClick={() => pressDot(index, staminas, setStamina)}
              ></span>
            ))}
          </div>
        </div>
        <h2>{dotLength(strengths, dexteritys, staminas)}</h2>
      </div>
    </>
  );
}
