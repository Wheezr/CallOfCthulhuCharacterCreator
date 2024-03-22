import "./Dot.css"
import { useState } from "react";

interface Props {
  key: number;
  dotState: boolean;
  onClick?: () => void;
}

function Dot({ key, dotState, onClick }: Props) {
  const [dotVisible, setDotVisibility] = useState(dotState);
  
  return (
    <>
      if (dotState === true) return <span className="dot"></span>
      return <span className="undot"></span>
    </>
  );
}

export default Dot;