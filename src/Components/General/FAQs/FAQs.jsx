import "./FAQs.scss";
import { Container } from "./../../Utilities/Container/Container";
import { HeadingSecondary } from "./../../Utilities/Heading/Sub-Component/HeadingSecondary";
import { Section } from "./../../Utilities/Section/Section";
import { Accordion } from "./../../Utilities/Accordion/Accordion";
import { faqData } from "../../../Data/Data";

export const FAQs = () => {
  return (
    <Section styleColor="primary">
      <Container>
        <div className="faq">
          <HeadingSecondary headingText={faqData.headingText} />
          <div className="faq-questions">
            {faqData.questionAnswer.map((val, idx) => {
              return <Accordion {...val} key={idx} />;
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
