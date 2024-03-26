import "./CombinedAttributes.css";
import React from "react";
import Physical from "./Physical";
import Social from "./Social";
import Mental from "./Mental";

function CombinedAttributes() {
  return (
    <>
      <div className="attributegrid">
        <Physical />
        <Social />
        <Mental />
      </div>
    </>
  );
}

export default CombinedAttributes;
