import React, { useState } from "react";

const UserDetailsInput = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
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
      <label htmlFor="name">Name:</label>
      <input
        style={styles.input}
        onChange={(e) => handleInputChange("name", e.target.value)}
        value={userDetails.name}
        placeholder="Enter your name"
        id="name"
      />

      {/* Repeat the pattern for each field */}
      <label htmlFor="nature">Nature:</label>
      <input
        style={styles.input}
        onChange={(e) => handleInputChange("nature", e.target.value)}
        value={userDetails.nature}
        placeholder="Enter your nature"
        id="nature"
      />

      {/* Continue for each input... */}
      {/* Essence, Demeanor, Tradition, Concept, Chronicle, Cabal */}
    </div>
  );
};

const styles = {
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
