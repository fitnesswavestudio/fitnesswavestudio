import "./Input.scss";
export const Input = ({ type, id , required , value ,name,changeHandler}) => {
  if (required==true) {
    return <input name={name} onChange={changeHandler} type={type} value={value} className="form-group__input" id={id} required/>;
  } else {
    return <input name={name} onChange={changeHandler} type={type} value={value} className="form-group__input" id={id} />;  
  } 
  };
