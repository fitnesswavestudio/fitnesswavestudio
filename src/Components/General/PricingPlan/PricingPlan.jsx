import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { HeadingSecondary } from "./../../Utilities/Heading/Sub-Component/HeadingSecondary";
import { HeadingPrimary } from "./../../Utilities/Heading/Sub-Component/HeadingPrimary";
import { HeadingTertiary } from "./../../Utilities/Heading/Sub-Component/HeadingTertiary";
import { Card } from "./../../Utilities/Card/Card";
import { Paragraph } from "./../../Utilities/Paragraph/Paragraph";
import { Button } from "./../../Utilities/Button/Button";
import "./PricingPlan.scss";

const Benefit = ({ className, data }) => {
  const classNameBenefits = className + "-benefits";
  return (
    <ul className={classNameBenefits}>
      {data.map((val, key) => {
        return <ListItem key={key} val={val} />;
      })}
    </ul>
  );
};

const ListItem = ({ val }) => {
  return (
    <li>
      <span className="icon-text">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        {val}
      </span>
    </li>
  );
};

const PricingDetails = ({
  className,
  plan,
  price,
  pricingText,
  planBenefit,
}) => {
  const classNameAmount = className + "__amount";
  const classNameText = className + "__text";
  const classNameBtn = className + "__btn";
  return (
    <>
      <HeadingTertiary text={plan} />
      <Paragraph paragraphText={pricingText} />
      <p className={classNameAmount}>
        <span> &#8377; {price}</span> /month
      </p>
      <Benefit className={classNameText} data={planBenefit} />
      <div className={classNameBtn}>
        <Button contextName="Enroll Now" styleName="button-primary" />
      </div>
    </>
  );
};

export const PricingPlan = ({ pricingCardData, headingData }) => {
  const initialClassName = "pricing";
  const classNamePlans = initialClassName + "-plans";
  const cardBgColor = "card-light padding-tb-lg hover-effect";
  const [primaryHeadingText, secondaryHeadingText] = headingData;
  return (
    <Section styleColor="secondary">
      <Container>
        <div className={initialClassName}>
          <HeadingSecondary headingText={secondaryHeadingText} />
          <HeadingPrimary headingText={primaryHeadingText} />

          <div className={classNamePlans}>
            {pricingCardData.map((val, key) => {
              return (
                <Card key={key} bgColor={cardBgColor}>
                  <PricingDetails
                    key={key}
                    className={classNamePlans}
                    {...val}
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
