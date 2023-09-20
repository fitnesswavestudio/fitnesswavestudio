import "./LoginSignup.scss";
import { HeadingTertiary } from "./../../Utilities/Heading/Sub-Component/HeadingTertiary";
import { Form } from "./../../Utilities/Form/Form";
import { Label } from "./../../Utilities/Form/Label/Label";
import { Input } from "./../../Utilities/Form/Input/Input";
import { Button } from "./../../Utilities/Button/Button";

const FormGroup = ({ id, text, type }) => {
  return (
    <div className="form-group">
      <Label labelFor={id} labelText={text} />
      <Input type={type} id={id} />
    </div>
  );
};
const Login = () => {
  return (
    <Form>
      <FormGroup id="email" text="Email" type="email" />
      <FormGroup id="password" text="Password" type="passwor d" />
      <div className="login__btn">
        <Button contextName="Login" styleName="button-primary" />
        <a href=""> Forgot password?</a>
      </div>
      <button type="button" class="login-with-google-btn">
        Sign in with Google
      </button>
    </Form>
  );
};

const Signup = () => {
  return (
    <Form>
      <FormGroup id="name" text="Name" type="name" />
      <FormGroup id="email" text="Email" type="email" />
      <FormGroup id="password" text="Password" type="password" />
      <Button contextName="Signup" styleName="button-primary" />
    </Form>
  );
};

export const LoginSignup = () => {
  return (
    <div className="login-signup">
      <div className="login-signup--modal">
        <div className="login-signup--modal__login">
          <div className="login">
            <HeadingTertiary text="Login" />
            <Login />
          </div>
        </div>
        <div className="login-signup--modal__signup">
          <div className="signup">
            <HeadingTertiary text="Signup" />
            <Signup />
          </div>
        </div>
      </div>
    </div>
  );
};
