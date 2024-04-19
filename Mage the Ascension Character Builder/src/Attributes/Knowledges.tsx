import "./Physical.css";
import { Dispatch, SetStateAction, useState } from "react";
import "../Dot.css";
import React from "react";

let academicsInit = ["undot", "undot", "undot", "undot"];

let computerInit = ["undot", "undot", "undot", "undot"];

let cosmologyInit = ["undot", "undot", "undot", "undot"];

let enigmaInit = ["undot", "undot", "undot", "undot"];

let investigationInit = ["undot", "undot", "undot", "undot"];

let lawInit = ["undot", "undot", "undot", "undot"];

let linguisticsInit = ["undot", "undot", "undot", "undot"];

let medicineInit = ["undot", "undot", "undot", "undot"];

let occultInit = ["undot", "undot", "undot", "undot"];

let scienceInit = ["undot", "undot", "undot", "undot"];

export default function Knowledges() {
  const [academicss, setAcademics] = useState(academicsInit);
  const [computers, setComputer] = useState(computerInit);
  const [cosmologys, setCosmology] = useState(cosmologyInit);
  const [enigmas, setEnigma] = useState(enigmaInit);
  const [investigations, setInvestigation] = useState(investigationInit);
  const [laws, setLaw] = useState(lawInit);
  const [linguisticss, setLinguistics] = useState(linguisticsInit);
  const [medicines, setMedicine] = useState(medicineInit);
  const [occults, setOccult] = useState(occultInit);
  const [sciences, setScience] = useState(scienceInit);

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
        <h1>Knowledges</h1>
        <div className="container">
          <h2>Academics</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {academicss.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, academicss, setAcademics)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Computer</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {computers.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, computers, setComputer)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Cosmology</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {cosmologys.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, cosmologys, setCosmology)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Enigma</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {enigmas.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, enigmas, setEnigma)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Investigation</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {investigations.map((item, index) => (
                <span
                  className={item}
                  onClick={() =>
                    pressDot(index, investigations, setInvestigation)
                  }
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Law</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {laws.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, laws, setLaw)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Linguistics</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {linguisticss.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, linguisticss, setLinguistics)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Medicine</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {medicines.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, medicines, setMedicine)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Occult</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {occults.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, occults, setOccult)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Science</h2>
          <hr></hr>
          <div className="container">
            <span className="dot"></span>
            <div style={{ display: "inline-block" }}>
              {sciences.map((item, index) => (
                <span
                  className={item}
                  onClick={() => pressDot(index, sciences, setScience)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="attributeContainer">
          <h2>
            {dotLength(
              academicss,
              computers,
              cosmologys,
              enigmas,
              investigations,
              laws,
              linguisticss,
              medicines,
              occults,
              sciences
            )}
          </h2>
        </div>
      </div>
    </>
  );
}
