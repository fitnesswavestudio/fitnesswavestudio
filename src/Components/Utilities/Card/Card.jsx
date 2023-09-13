import "./Card.scss";
export const Card = ({ children, bgColor }) => {
  return (
    <div className={"card " + bgColor}>
      <div className="card-item">{children}</div>
    </div>
  );
};
