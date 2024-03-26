import CharacterTraits from "./CharacterTraits";
import Physical from "./Attributes/Physical";
import Dot from "./Dot";
import React from "react";
import "./App.css";
import Title from "./Title";

function App() {
  return (
    <div>
      <Title />
      <CharacterTraits />
      <Physical />
    </div>
  );
}

export default App;
