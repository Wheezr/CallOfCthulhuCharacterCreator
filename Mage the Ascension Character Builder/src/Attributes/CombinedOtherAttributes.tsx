import "./CombinedAttributes.css";
import { useState, Dispatch, SetStateAction } from "react";
import React from "react";
import Talents from "./Talents";
import Skills from "./Skills";
import Knowledges from "./Knowledges";

function CombinedOtherStats() {
  return (
    <div className="attributegrid">
      <div className="attributebox">
        <Talents />
      </div>
      <div className="attributebox">
        <Skills />
      </div>
      <div className="attributebox">
        <Knowledges />
      </div>
    </div>
  );
}

export default CombinedOtherStats;
