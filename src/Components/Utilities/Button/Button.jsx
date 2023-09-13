import "./Button.scss";

export const Button = ({ contextName, styleName, clickHandler }) => {
  return (
    <button className={"btn " + styleName} onClick={clickHandler}>
      {contextName}
    </button>
  );
};
