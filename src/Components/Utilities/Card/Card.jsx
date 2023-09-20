import "./Card.scss";
export const Card = ({ children, bgColor }) => {
  return (
    <div className={"infoCard " + bgColor}>
      <div className="infoCard-effect"></div>
      <div className="infoCard-item">{children}</div>
    </div>
  );
};
