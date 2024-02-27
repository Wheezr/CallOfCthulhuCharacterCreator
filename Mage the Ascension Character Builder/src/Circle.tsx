import "./Circle.css"

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