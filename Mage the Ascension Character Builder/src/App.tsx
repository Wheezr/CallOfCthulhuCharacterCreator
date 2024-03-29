import CharacterTraits from "./CharacterTraits";
import { Dispatch, SetStateAction, useState } from "react";
import Physical from "./Attributes/Physical";
import Social from "./Attributes/Social";
import Mental from "./Attributes/Mental";
import Dot from "./Dot";
import React from "react";
import "./App.css";
import Title from "./Title";
import CombinedAttributes from "./Attributes/CombinedAttributes";

let selectionInit = [
  { value: "Primary", state: false },
  { value: "Secondary", state: false },
  { value: "Tertiary", state: false },
];

function App() {
  const [selection, changeSelection] = useState(selectionInit);
  const [selected1, change1] = useState("None");

  // function pressDot(index: number, array: string[], action: Dispatch<SetStateAction<string[]>>) {
  //   const dot = array.map((c, i) => {
  //     if (i === index && c === 'dot') {
  //       return 'undot';
  //     } else if (i === index && c === 'undot') {
  //       return 'dot';
  //     } else {
  //       return c;
  //     }
  //   });
  //   action(dot);
  // }

  function change(value: string,
                  list: {value: string, state: boolean}[],
                  action: Dispatch<SetStateAction<{value: string, state: boolean}[]>>) {
    const selects = list.map((item) =>{
      if (item.value === value) {
        return {value: value, state: true};
      } else {
        return {value: value, state: false};
      }
    })
    action(selects);
  };

  return (
    <>
      {/* <CharacterTraits /> */}
      { <Physical /> }
      <h1>{selected1}</h1>
      <select name="Point Allocate" id="Point Allocate" onChange={(e) => change(e.target.value, selection, changeSelection)}>
        <option disabled selected value> -- selection an option --</option>
        {selection.map((select) => 
        <option disabled={select.state === true ? true : false} 
                value={select.value}
        >{select.value}</option>)}
      </select>
      {/* { <Social />}
      
      { <Mental />} */}
    </>
  );
}

export default App;
