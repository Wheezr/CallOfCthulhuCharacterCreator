import "./Dot.css"

interface Props {
  onClick: () => void;
}

function Dot({ onClick }: Props) {
  return (
    <>
      <span className="dot" onClick={onClick}></span>
    </>
  );
}

export default Dot;