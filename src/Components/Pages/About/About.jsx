import { FAQs } from "./../../General/FAQs/FAQs";
import { HeadingPage } from "./../../Utilities/Heading/HeadingPage";
import { RefundPolicy } from "./../../General/RefundPolicy/RefundPolicy";
import { TermsAndCondition } from "./../../General/TermsAndCondition/TermsAndCondition";
import { AboutUS } from "./AboutUS";
import "./About.scss";

export const About = () => {
  return (
    <>
      <HeadingPage text="About US" className=" about" />
      <AboutUS />
      <FAQs />
      <TermsAndCondition />
      <RefundPolicy />
    </>
  );
};
