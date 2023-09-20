import "./Button.scss";

export const Button = ({ contextName, styleName, clickHandler }) => {
  return (
    <button className={"button " + styleName} onClick={clickHandler}>
      {contextName}
    </button>
  );
};
