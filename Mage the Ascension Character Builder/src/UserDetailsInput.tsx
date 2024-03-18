import React, { useState, CSSProperties } from "react";

const UserDetailsInput = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    player: "",
    nature: "",
    essence: "",
    demeanor: "",
    tradition: "",
    concept: "",
    chronicle: "",
    cabal: "",
  });

  const handleInputChange = (name: keyof typeof userDetails, value: string) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div style={styles.container}>
      {/* Name */}
      <label htmlFor="name">Name:</label>
      <input
        style={styles.input}
        onChange={(e) => handleInputChange("name", e.target.value)}
        value={userDetails.name}
        placeholder="Enter your name"
        id="name"
      />

      {/* Player */}
      <label htmlFor="player">Player:</label>
      <input
        style={styles.input}
        onChange={(e) => handleInputChange("player", e.target.value)}
        value={userDetails.player}
        placeholder="Enter your player"
        id="player"
      />

      {/* Nature */}
      <label htmlFor="nature">Nature:</label>
      <input
        style={styles.input}
        onChange={(e) => handleInputChange("nature", e.target.value)}
        value={userDetails.nature}
        placeholder="Enter your nature"
        id="nature"
      />

      {/* Essence */}
      <label htmlFor="essence">Essence:</label>
      <input
        style={styles.input}
        onChange={(e) => handleInputChange("essence", e.target.value)}
        value={userDetails.essence}
        placeholder="Enter your essence"
        id="essence"
      />

      {/* Demeanor */}
      <label htmlFor="demeanor">Demeanor:</label>
      <input
        style={styles.input}
        onChange={(e) => handleInputChange("demeanor", e.target.value)}
        value={userDetails.demeanor}
        placeholder="Enter your demeanor"
        id="demeanor"
      />

      {/* Tradition */}
      <label htmlFor="tradition">Tradition:</label>
      <input
        style={styles.input}
        onChange={(e) => handleInputChange("tradition", e.target.value)}
        value={userDetails.tradition}
        placeholder="Enter your tradition"
        id="tradition"
      />

      {/* Concept */}
      <label htmlFor="concept">Concept:</label>
      <input
        style={styles.input}
        onChange={(e) => handleInputChange("concept", e.target.value)}
        value={userDetails.concept}
        placeholder="Enter your concept"
        id="concept"
      />

      {/* Chronicle */}
      <label htmlFor="chronicle">Chronicle:</label>
      <input
        style={styles.input}
        onChange={(e) => handleInputChange("chronicle", e.target.value)}
        value={userDetails.chronicle}
        placeholder="Enter your chronicle"
        id="chronicle"
      />

      {/* Cabal */}
      <label htmlFor="cabal">Cabal:</label>
      <input
        style={styles.input}
        onChange={(e) => handleInputChange("cabal", e.target.value)}
        value={userDetails.cabal}
        placeholder="Enter your cabal"
        id="cabal"
      />
    </div>
  );
};

const styles: { container: CSSProperties; input: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // full height of the viewport
  },
  input: {
    height: "40px",
    margin: "12px",
    border: "1px solid #000",
    padding: "10px",
    width: "80%", // Set width as needed
  },
};

export default UserDetailsInput;
