import "./Circle.css";
import React from "react";

interface Props {
  onClick: () => void;
}

function Circle({ onClick }: Props) {
  return (
    <>
      <span className="circle" onClick={onClick}></span>
    </>
  );
}

export default Circle;
