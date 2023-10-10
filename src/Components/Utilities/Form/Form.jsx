import "./Form.scss";
export const Form = ({ children , submitHandler}) => {
  return (
    <form action="#" className="form" onSubmit={submitHandler}>
      {children}
    </form>
  );
};
