import React, { useState } from "react";
import "./UserDetailsInput.css";

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
    <div className="container">
      <div className="grid">
        {/* Name */}
        <div className="inputGroup">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            className="input"
            onChange={(e) => handleInputChange("name", e.target.value)}
            value={userDetails.name}
            placeholder="Enter your name"
            id="name"
          />
        </div>

        {/* Nature */}
        <div className="inputGroup">
          <label htmlFor="nature" className="label">
            Nature:
          </label>
          <input
            className="input"
            onChange={(e) => handleInputChange("nature", e.target.value)}
            value={userDetails.nature}
            placeholder="Enter your nature"
            id="nature"
          />
        </div>

        {/* Tradition */}
        <div className="inputGroup">
          <label htmlFor="tradition" className="label">
            Tradition:
          </label>
          <input
            className="input"
            onChange={(e) => handleInputChange("tradition", e.target.value)}
            value={userDetails.tradition}
            placeholder="Enter your tradition"
            id="tradition"
          />
        </div>

        {/* Player */}
        <div className="inputGroup">
          <label htmlFor="player" className="label">
            Player:
          </label>
          <input
            className="input"
            onChange={(e) => handleInputChange("player", e.target.value)}
            value={userDetails.player}
            placeholder="Enter your player"
            id="player"
          />
        </div>

        {/* Essence */}
        <div className="inputGroup">
          <label htmlFor="essence" className="label">
            Essence:
          </label>
          <input
            className="input"
            onChange={(e) => handleInputChange("essence", e.target.value)}
            value={userDetails.essence}
            placeholder="Enter your essence"
            id="essence"
          />
        </div>

        {/* Concept */}
        <div className="inputGroup">
          <label htmlFor="concept" className="label">
            Concept:
          </label>
          <input
            className="input"
            onChange={(e) => handleInputChange("concept", e.target.value)}
            value={userDetails.concept}
            placeholder="Enter your concept"
            id="concept"
          />
        </div>

        {/* Chronicle */}
        <div className="inputGroup">
          <label htmlFor="chronicle" className="label">
            Chronicle:
          </label>
          <input
            className="input"
            onChange={(e) => handleInputChange("chronicle", e.target.value)}
            value={userDetails.chronicle}
            placeholder="Enter your chronicle"
            id="chronicle"
          />
        </div>

        {/* Demeanor */}
        <div className="inputGroup">
          <label htmlFor="demeanor" className="label">
            Demeanor:
          </label>
          <input
            className="input"
            onChange={(e) => handleInputChange("demeanor", e.target.value)}
            value={userDetails.demeanor}
            placeholder="Enter your demeanor"
            id="demeanor"
          />
        </div>

        {/* Cabal */}
        <div className="inputGroup">
          <label htmlFor="cabal" className="label">
            Cabal:
          </label>
          <input
            className="input"
            onChange={(e) => handleInputChange("cabal", e.target.value)}
            value={userDetails.cabal}
            placeholder="Enter your cabal"
            id="cabal"
          />
        </div>
      </div>

      {/* Temp text box to show that it records and updates */}
      <textarea
        className="textArea"
        value={JSON.stringify(userDetails, null, 2)}
        readOnly
      />
    </div>
  );
};

export default UserDetailsInput;

