import { Container } from "./../../Utilities/Container/Container";
import { Form } from "./../../Utilities/Form/Form";
import { HeadingSecondary } from "./../../Utilities/Heading/Sub-Component/HeadingSecondary";
import { Section } from "./../../Utilities/Section/Section";
import { Button } from "./../../Utilities/Button/Button";
import { Label } from "./../../Utilities/Form/Label/Label";
import { TextArea } from "./../../Utilities/Form/TextArea/TextArea";
import { Input } from "./../../Utilities/Form/Input/Input";
import "./Contact.scss";
import { contactData } from "../../../Data/Data";

export const Contact = () => {
  const sendMessageHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Section styleColor="primary" id="contact">
      <Container>
        <div className="contact">
          <div className="contact-logo">
            <img {...contactData.logo} />
          </div>
          <div className="contact-main">
            <HeadingSecondary headingText="Contact US" />
            <Form>
              {contactData.contactForm.map((val, key) => {
                const input =
                  val.id === "message" ? (
                    <TextArea id={val.id} />
                  ) : (
                    <Input id={val.id} />
                  );
                const content = (
                  <div key={key} className="form-group">
                    <Label labelFor={val.id} labelText={val.labelText} />
                    {input}
                  </div>
                );
                return content;
              })}
              <Button
                {...contactData.button}
                clickHandler={sendMessageHandler}
              />
            </Form>
          </div>
        </div>
      </Container>
    </Section>
  );
};
