import { useState } from "react";
import "./Accordion.scss";

const AccordionContent = ({ questionText, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="accordion-heading" onClick={() => setIsOpen(!isOpen)}>
        <span className="accordion-heading__symbol">{isOpen ? "−" : "+"}</span>
        <h3 className="accordion-heading__text">{questionText}</h3>
      </div>
      <div className={"accordion-content" + (isOpen ? " active" : "")}>
        <p className="accordion-content__text">{answer}</p>
      </div>
    </>
  );
};

export const Accordion = ({ questionText, answer }) => {
  return (
    <div className="accordion">
      <AccordionContent questionText={questionText} answer={answer} />
    </div>
  );
};
