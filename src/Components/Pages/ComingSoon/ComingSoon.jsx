import { HeadingPrimary } from "../../Utilities/Heading/Sub-Component/HeadingPrimary";
import { HeadingTertiary } from "../../Utilities/Heading/Sub-Component/HeadingTertiary";
import "./ComingSoon.scss";
import { Section } from "./../../Utilities/Section/Section";

export const ComingSoon = () => {
  return (
    <Section className="coming-soon">
      <div className="coming-soon-head">
        <ion-icon name="reload-circle-sharp"></ion-icon>
        <HeadingPrimary headingText="Coming Soon" />
      </div>
    </Section>
  );
};
