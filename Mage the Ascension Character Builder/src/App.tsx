import React, { useState, useEffect } from "react";
import CharacterTraits from "./CharacterTraits";
import Dot from "./Dot";
import Title from "./Title";
import CombinedAttributes from "./Attributes/CombinedAttributes";
import "./App.css";
import CombinedOtherStats from "./Attributes/CombinedOtherStats";

function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleResize() {
      const scaleAdjustment = document.documentElement.clientWidth / 1500;
      setScale(scaleAdjustment);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="app-container"
      style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
    >
      <Title />
      <CharacterTraits />
      <CombinedAttributes />
      <CombinedOtherStats />
    </div>
  );
}

export default App;
