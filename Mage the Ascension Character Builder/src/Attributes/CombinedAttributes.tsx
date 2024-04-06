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

  function change(
    value: string,
    list: { value: string; state: boolean }[],
    action: Dispatch<SetStateAction<{ value: string; state: boolean }[]>>
  ) {
    const selects = list.map((item) => {
      if (item.value === value) {
        return { value: value, state: true };
      } else {
        return { value: value, state: false };
      }
    });
    action(selects);
  }
  return (
    <>
      <div className="attributegrid">
        <div className="attributebox">
          <Physical />
          <h1>{selected1}</h1>
          <select
            name="Point Allocate"
            id="Point Allocate"
            onChange={(e) => change(e.target.value, selection, changeSelection)}
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
        </div>

        <div className="attributebox">
          <Social />
        </div>

        <div className="attributebox">
          <Mental />
        </div>
      </div>
    </>
  );
}

export default CombinedAttributes;
