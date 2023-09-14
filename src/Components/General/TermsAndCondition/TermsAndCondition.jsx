import "./TermsAndCondition.scss";
import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { HeadingSecondary } from "./../../Utilities/Heading/Sub-Component/HeadingSecondary";
import { HeadingTertiary } from "./../../Utilities/Heading/Sub-Component/HeadingTertiary";
import { termsAndConditionData } from "../../../Data/Data";

export const TermsAndCondition = () => {
  return (
    <Section styleColor="secondary">
      <Container>
        <div className="termsandcontitions">
          <HeadingSecondary
            headingText={termsAndConditionData.headingData.secondary}
          />
          <div className="terms">
            <HeadingTertiary
              text={termsAndConditionData.headingData.tertiary}
            />
            <p className="terms__text">
              {termsAndConditionData.terms.text}&nbsp;
              <a href="#" className="terms__link">
                See More &rarr;
              </a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
