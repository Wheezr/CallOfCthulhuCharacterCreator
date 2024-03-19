import CharacterTraits from "./CharacterTraits";
import Physical from "./Attributes/Physical";
import Dot from "./Dot";
import UserDetailsInput from "./UserDetailsInput";
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <UserDetailsInput />
      <Physical />
    </div>
  );
}

export default App;
