import React, { useState, CSSProperties } from "react";

const UserDetailsInput = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    nature: "",
    tradition: "",
    player: "",
    essence: "",
    concept: "",
    chronicle: "",
    demeanor: "",
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
      <div style={styles.grid}>
        {/* Name */}
        <div style={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input
            style={styles.input}
            onChange={(e) => handleInputChange("name", e.target.value)}
            value={userDetails.name}
            placeholder="Enter your name"
            id="name"
          />
        </div>

        {/* Nature */}
        <div style={styles.inputGroup}>
          <label htmlFor="nature">Nature:</label>
          <input
            style={styles.input}
            onChange={(e) => handleInputChange("nature", e.target.value)}
            value={userDetails.nature}
            placeholder="Enter your nature"
            id="nature"
          />
        </div>

        {/* Tradition */}
        <div style={styles.inputGroup}>
          <label htmlFor="tradition">Tradition:</label>
          <input
            style={styles.input}
            onChange={(e) => handleInputChange("tradition", e.target.value)}
            value={userDetails.tradition}
            placeholder="Enter your tradition"
            id="tradition"
          />
        </div>

        {/* Player */}
        <div style={styles.inputGroup}>
          <label htmlFor="player">Player:</label>
          <input
            style={styles.input}
            onChange={(e) => handleInputChange("player", e.target.value)}
            value={userDetails.player}
            placeholder="Enter your player"
            id="player"
          />
        </div>

        {/* Essence */}
        <div style={styles.inputGroup}>
          <label htmlFor="essence">Essence:</label>
          <input
            style={styles.input}
            onChange={(e) => handleInputChange("essence", e.target.value)}
            value={userDetails.essence}
            placeholder="Enter your essence"
            id="essence"
          />
        </div>

        {/* Concept */}
        <div style={styles.inputGroup}>
          <label htmlFor="concept">Concept:</label>
          <input
            style={styles.input}
            onChange={(e) => handleInputChange("concept", e.target.value)}
            value={userDetails.concept}
            placeholder="Enter your concept"
            id="concept"
          />
        </div>

        {/* Chronicle */}
        <div style={styles.inputGroup}>
          <label htmlFor="chronicle">Chronicle:</label>
          <input
            style={styles.input}
            onChange={(e) => handleInputChange("chronicle", e.target.value)}
            value={userDetails.chronicle}
            placeholder="Enter your chronicle"
            id="chronicle"
          />
        </div>

        {/* Demeanor */}
        <div style={styles.inputGroup}>
          <label htmlFor="demeanor">Demeanor:</label>
          <input
            style={styles.input}
            onChange={(e) => handleInputChange("demeanor", e.target.value)}
            value={userDetails.demeanor}
            placeholder="Enter your demeanor"
            id="demeanor"
          />
        </div>

        {/* Cabal */}
        <div style={styles.inputGroup}>
          <label htmlFor="cabal">Cabal:</label>
          <input
            style={styles.input}
            onChange={(e) => handleInputChange("cabal", e.target.value)}
            value={userDetails.cabal}
            placeholder="Enter your cabal"
            id="cabal"
          />
        </div>
      </div>
    </div>
  );
};

const styles: {
  container: CSSProperties;
  grid: CSSProperties;
  input: CSSProperties;
  inputGroup: CSSProperties;
} = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    height: "40px",
    border: "1px solid #000",
    padding: "10px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
};

export default UserDetailsInput;

