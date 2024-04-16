import "./CombinedAttributes.css";
import { useState, Dispatch, SetStateAction } from "react";
import React from "react";
import Physical from "./Physical";
import Social from "./Social";
import Mental from "./Mental";

let selectionInit = [
  { value: "Primary", state: false },
  { value: "Secondary", state: false },
  { value: "Tertiary", state: false },
];

function CombinedAttributes() {
  const [selection, changeSelection] = useState(selectionInit);
  const [selected1, change1] = useState("None");

  function change(value: EventTarget & HTMLSelectElement,
                  list: {value: string, state: boolean}[],
                  action: Dispatch<SetStateAction<{value: string, state: boolean}[]>>) {
    const selects = list.map((item) =>{
      if (item.value === value.value) {
        return {value: value.value, state: true};
      } else {
        return {value: item.value, state: false};
      }
    })
      action(selects);
  };
  return (
    <>
      <div className="attributegrid">
        <Physical />
        <h1>{selected1}</h1>
        <select name="Point Allocate" 
                id="Point Allocate" 
                onChange={(e) => change(e.target, selection, changeSelection)}
                style={{display: "inline-block"}}>
          <option> -- selection an option --</option>
          {selection.map((item, index) => (
            <option key={index}>{item.value}</option>
          ))}
        </select>
        {/* <Social />
        <Mental /> */}
      </div>
    </>
  );
}

export default CombinedAttributes;
