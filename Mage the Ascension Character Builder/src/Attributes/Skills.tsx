import "./Physical.css";
import { Dispatch, SetStateAction, useState } from "react";
import "../Dot.css";
import React from "react";

let craftsInit = ["undot", "undot", "undot", "undot"];

let driveInit = ["undot", "undot", "undot", "undot"];

let etiquetteInit = ["undot", "undot", "undot", "undot"];

let firearmsInit = ["undot", "undot", "undot", "undot"];

let meditationInit = ["undot", "undot", "undot", "undot"];

let meleeInit = ["undot", "undot", "undot", "undot"];

let performanceInit = ["undot", "undot", "undot", "undot"];

let stealthInit = ["undot", "undot", "undot", "undot"];

let survivalInit = ["undot", "undot", "undot", "undot"];

let technologyInit = ["undot", "undot", "undot", "undot"];

export default function Skills() {
  const [craftss, setCrafts] = useState(craftsInit);
  const [drives, setDrive] = useState(driveInit);
  const [etiquettes, setEtiquette] = useState(etiquetteInit);
  const [firearmss, setFirearms] = useState(firearmsInit);
  const [meditations, setMeditation] = useState(meditationInit);
  const [melees, setMelee] = useState(meleeInit);
  const [performances, setPerformance] = useState(performanceInit);
  const [stealths, setStealth] = useState(stealthInit);
  const [survivals, setSurvival] = useState(survivalInit);
  const [technologys, setTechnology] = useState(technologyInit);

  function pressDot(
    index: number,
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

  const dotLength = (
    array1: string[],
    array2: string[],
    array3: string[],
    array4: string[],
    array5: string[],
    array6: string[],
    array7: string[],
    array8: string[],
    array9: string[],
    array10: string[]
  ) => {
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
    for (var i = 0; i < array4.length; i++) {
      if (array4[i] === "dot") {
        len++;
      }
    }
    for (var i = 0; i < array5.length; i++) {
      if (array5[i] === "dot") {
        len++;
      }
    }
    for (var i = 0; i < array6.length; i++) {
      if (array6[i] === "dot") {
        len++;
      }
    }
    for (var i = 0; i < array7.length; i++) {
      if (array7[i] === "dot") {
        len++;
      }
    }
    for (var i = 0; i < array8.length; i++) {
      if (array8[i] === "dot") {
        len++;
      }
    }
    for (var i = 0; i < array9.length; i++) {
      if (array9[i] === "dot") {
        len++;
      }
    }
    for (var i = 0; i < array10.length; i++) {
      if (array10[i] === "dot") {
        len++;
      }
    }
    return len;
  };

  return (
    <>
      <div className="attributeContainer">
        <h1>Skills</h1>
        <div className="container">
          <h2>Crafts</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {craftss.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, craftss, setCrafts)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Drive</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {drives.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, drives, setDrive)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Etiquette</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {etiquettes.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, etiquettes, setEtiquette)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Firearms</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {firearmss.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, firearmss, setFirearms)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Meditation</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {meditations.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, meditations, setMeditation)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Melee</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {melees.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, melees, setMelee)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Performance</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {performances.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, performances, setPerformance)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Stealth</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {stealths.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, stealths, setStealth)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Survival</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {survivals.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, survivals, setSurvival)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Technology</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {technologys.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, technologys, setTechnology)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="attributeContainer">
          <h2>
            {dotLength(
              craftss,
              drives,
              etiquettes,
              firearmss,
              meditations,
              melees,
              performances,
              stealths,
              survivals,
              technologys
            )}
          </h2>
        </div>
      </div>
    </>
  );
}
