import { Container } from "./../../Utilities/Container/Container";
import { HeadingSecondary } from "./../../Utilities/Heading/Sub-Component/HeadingSecondary";
import { Section } from "./../../Utilities/Section/Section";
import "./RefundPolicy.scss";
import { refundPolicyData } from "../../../Data/Data";

const Content = ({ className, text }) => {
  return <p className={className}>{text}</p>;
};

const Policy = ({ question, answer }) => {
  return (
    <div className="refund-policy--text__content">
      <Content className="paragraph-heading" text={question} />
      <Content text={answer} className="paragraph-sub" />
    </div>
  );
};

export const RefundPolicy = () => {
  return (
    <Section styleColor="primary">
      <Container>
        <div className="refund-policy">
          <HeadingSecondary headingText="Refund Policy" />
          <div className="refund-policy--text">
            {refundPolicyData.qna.map((val, key) => {
              return <Policy {...val} key={key} />;
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
