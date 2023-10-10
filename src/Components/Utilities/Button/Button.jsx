import "./Button.scss";

export const Button = ({ contextName, styleName, clickHandler , type }) => {
  return (
    <button className={"button " + styleName} onClick={clickHandler} type={type}>
      {contextName}
    </button>
  );
};
