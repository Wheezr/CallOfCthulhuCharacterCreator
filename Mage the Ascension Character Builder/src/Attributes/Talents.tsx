import "./Physical.css";
import { Dispatch, SetStateAction, useState } from "react";
import "../Dot.css";
import React from "react";

let alertnessInit = ["undot", "undot", "undot", "undot"];

let athleticsInit = ["undot", "undot", "undot", "undot"];

let awarenessInit = ["undot", "undot", "undot", "undot"];

let brawlInit = ["undot", "undot", "undot", "undot"];

let dodgeInit = ["undot", "undot", "undot", "undot"];

let expressionInit = ["undot", "undot", "undot", "undot"];

let intimidationInit = ["undot", "undot", "undot", "undot"];

let leadershipInit = ["undot", "undot", "undot", "undot"];

let streetwiseInit = ["undot", "undot", "undot", "undot"];

let subterfugeInit = ["undot", "undot", "undot", "undot"];

export default function Talents() {
  const [alertnesss, setAlertness] = useState(alertnessInit);
  const [athleticss, setAthletics] = useState(athleticsInit);
  const [awarenesss, setAwareness] = useState(awarenessInit);
  const [brawls, setBrawl] = useState(brawlInit);
  const [dodges, setDodge] = useState(dodgeInit);
  const [expressions, setExpression] = useState(expressionInit);
  const [intimidations, setIntimidation] = useState(intimidationInit);
  const [leaderships, setLeadership] = useState(leadershipInit);
  const [streetwises, setStreetwise] = useState(streetwiseInit);
  const [subterfuges, setSubterfuge] = useState(subterfugeInit);

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
        <h1>Talents</h1>
        <div className="container">
          <h2>Alertness</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {alertnesss.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, alertnesss, setAlertness)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Athletics</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {athleticss.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, athleticss, setAthletics)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Awareness</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {awarenesss.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, awarenesss, setAwareness)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Brawl</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {brawls.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, brawls, setBrawl)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Dodge</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {dodges.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, dodges, setDodge)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Expression</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {expressions.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, expressions, setExpression)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Intimidation</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {intimidations.map((item, index) => (
                <span
                  className={item}
                  onClick={() =>
                    pressDot(index, intimidations, setIntimidation)
                  }
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Leadership</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {leaderships.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, leaderships, setLeadership)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Streetwise</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {streetwises.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, streetwises, setStreetwise)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Subterfuge</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {subterfuges.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, subterfuges, setSubterfuge)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="attributeContainer">
          <h2>
            {dotLength(
              alertnesss,
              athleticss,
              awarenesss,
              brawls,
              dodges,
              expressions,
              intimidations,
              leaderships,
              streetwises,
              subterfuges
            )}
          </h2>
        </div>
      </div>
    </>
  );
}
