import "./TextArea.scss";
export const TextArea = ({ id,changeHandler,value,name }) => {
  return <textarea className="form-group__text-area" id={id} rows="3" name={name} value={value} onChange={changeHandler} />;
};
