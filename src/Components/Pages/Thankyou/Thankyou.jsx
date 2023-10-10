import { FAQs } from "../../General/FAQs/FAQs";
import { HeadingPage } from "../../Utilities/Heading/HeadingPage";
import { RefundPolicy } from "../../General/RefundPolicy/RefundPolicy";
import { TermsAndCondition } from "../../General/TermsAndCondition/TermsAndCondition";
import { Container } from "../../Utilities/Container/Container";
import { HeadingSecondary } from "../../Utilities/Heading/Sub-Component/HeadingSecondary";
import { Section } from "../../Utilities/Section/Section";
import "./Thankyou.scss";

export const Thankyou = () => {
  return (
    <>
      <HeadingPage text="Thank You" className=" about" />
      <Section>
      <Container>
      
      <HeadingSecondary headingText="Thank You for enrolling with us, we will reach back to you shortly." />
      </Container>
      </Section>
      <FAQs />
      <TermsAndCondition />
      <RefundPolicy />
    </>
  );
};
