import { FAQs } from "../../General/FAQs/FAQs";
import { HeadingPage } from "../../Utilities/Heading/HeadingPage";
import { RefundPolicy } from "../../General/RefundPolicy/RefundPolicy";
import { TermsAndCondition } from "../../General/TermsAndCondition/TermsAndCondition";
import { Container } from "../../Utilities/Container/Container";
import { HeadingSecondary } from "../../Utilities/Heading/Sub-Component/HeadingSecondary";
import { Section } from "../../Utilities/Section/Section";
import { HeadingPrimary } from "../../Utilities/Heading/Sub-Component/HeadingPrimary";
import { Enrollform } from "../../General/Enrollform/Enrollform";
import "./Enroll.scss";

export const Enroll = () => {
  return (
    <>
      <HeadingPage text="Thank You" className=" about" />
      <Section>
      <Container>
      <HeadingSecondary headingText="Fill out the form.." />
      <HeadingPrimary headingText="Enroll Now"/>
      <Enrollform />
      </Container>
      </Section>
      <FAQs />
      <TermsAndCondition />
      <RefundPolicy />
    </>
  );
};
