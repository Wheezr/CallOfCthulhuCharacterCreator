import "./CombinedAttributes.css";
import { useState, Dispatch, SetStateAction } from "react";
import React from "react";
import Physical from "./Physical";
import Social from "./Social";
import Mental from "./Mental";

let selectionInit = [
  { value: "Primary", state: false, selected: 0 },
  { value: "Secondary", state: false, selected: 0 },
  { value: "Tertiary", state: false, selected: 0 },
];

function CombinedAttributes() {
  const [selection, changeSelection] = useState(selectionInit);

  function change(
    passed: EventTarget & HTMLSelectElement,
    list: { value: string; state: boolean; selected: number }[],
    action: Dispatch<
      SetStateAction<{ value: string; state: boolean; selected: number }[]>
    >
  ) {
    const selects = list.map((item) => {
      if (passed.value === "-- selection an option --") {
        if (passed.options.selectedIndex === item.selected) {
          return { value: item.value, state: false, selected: 0 };
        } else {
          return {
            value: item.value,
            state: item.state,
            selected: item.selected,
          };
        }
      } else if (passed.value === item.value) {
        return {
          value: passed.value,
          state: true,
          selected: passed.options.selectedIndex,
        };
      } else {
        return {
          value: item.value,
          state: item.state,
          selected: item.selected,
        };
      }
    });
    console.log(selects);
    action(selects);
  }

  function checkDisable(state: boolean, selected: number, index: number) {
    if (state) {
      if (selected === index) {
        return true;
      }
      return false;
    }
  }
  return (
    <>
      <div className="attributegrid">
        <div className="attributebox">
          <Physical />
          <select
            name="Set 1"
            id="Set 1"
            onChange={(e) => change(e.target, selection, changeSelection)}
            style={{ display: "inline-block" }}
          >
            <option>-- selection an option --</option>
            {selection.map((item, index) => (
              <option
                disabled={item.selected === index && item.state ? true : false}
              >
                {item.value}
              </option>
            ))}
          </select>
        </div>

        <div className="attributebox">
          <Social />
          <select
            name="Set 2"
            id="Set 2"
            onChange={(e) => change(e.target, selection, changeSelection)}
            style={{ display: "inline-block" }}
          >
            <option>-- selection an option --</option>
            {selection.map((item, index) => (
              <option
                disabled={
                  item.selected === index && item.state === true ? true : false
                }
              >
                {item.value}
              </option>
            ))}
          </select>
        </div>

        <div className="attributebox">
          <Mental />
          <select
            name="Set 3"
            id="Set 3"
            onChange={(e) => change(e.target, selection, changeSelection)}
            style={{ display: "inline-block" }}
          >
            <option>-- selection an option --</option>
            {selection.map((item, index) => (
              <option
                id={item.value}
                disabled={
                  item.selected === index && item.state === true ? true : false
                }
              >
                {item.value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default CombinedAttributes;
