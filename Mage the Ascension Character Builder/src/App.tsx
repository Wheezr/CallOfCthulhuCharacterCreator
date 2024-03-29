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



function App() {
  return (
    <>
      {<Title />}
      {<CharacterTraits />}
      {<CombinedAttributes />}
    </>
  );
}

export default App;
