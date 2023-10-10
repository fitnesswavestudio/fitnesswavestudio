import "./Input.scss";
export const Input = ({ type, id , required , value }) => {
  if (required==true) {
    return <input type={type} value={value} className="form-group__input" id={id} required/>;
  } else {
    return <input type={type} value={value} className="form-group__input" id={id} />;  
  } 
  };
