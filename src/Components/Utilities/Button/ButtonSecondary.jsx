import { NavLink } from "react-router-dom";
import "./ButtonSecondary.scss";

export const ButtonSecondary = ({ text, link }) => {
  const className = "btn-secondary";
  return (
    <NavLink to={link} className={className}>
      {text} &rarr;
    </NavLink>
  );
};
