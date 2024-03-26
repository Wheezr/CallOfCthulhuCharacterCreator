import CharacterTraits from "./CharacterTraits";
import Physical from "./Attributes/Physical";
import Social from "./Attributes/Social";
import Mental from "./Attributes/Mental";
import Dot from "./Dot";
import React from "react";
import "./App.css";
import { useState } from "react";
import Title from "./Title";

let selectionInit = [
  { value: "Primary", state: false },
  { value: "Secondary", state: false },
  { value: "Tertiary", state: false },
];

function App() {
  const [selection, changeSelection] = useState(selectionInit);
  const [selected1, change1] = useState("None");

  return (
    <>
      {<Title />}
      {<CharacterTraits />}
      {<Physical />}
      <h1>{selected1}</h1>
      <select
        name="Point Allocate"
        id="Point Allocate"
        onChange={(e) => console.log(e.target.disabled)}
      >
        <option disabled selected value>
          {" "}
          -- selection an option --
        </option>
        {selection.map((select) => (
          <option
            disabled={select.state === true ? true : false}
            value={select.value}
          >
            {select.value}
          </option>
        ))}
      </select>
      {/* { <Social />}
      
      { <Mental />} */}
    </>
  );
}

export default App;
