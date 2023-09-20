import "./WhyChoose.scss";

import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { Heading } from "./../../Utilities/Heading/Heading";
import { Card } from "./../../Utilities/Card/Card";
import { Normal } from "./../../Utilities/Card/Content/Normal";

import { whyChooseData } from "../../../Data/Data";
import { ButtonSecondary } from "../../Utilities/Button/ButtonSecondary";

export const WhyChoose = () => {
  return (
    <Section styleColor="primary">
      <Container>
        <div className="section-why">
          <div className="section-why--row1">
            <img {...whyChooseData.whyImage} styles={{maxHeight:'450px'}}/>
            <div className="section-why--row1__heading">
              <Heading {...whyChooseData.headingText} />
              <Card bgColor="cardLightDark">
                <Normal
                  headingText={whyChooseData.primaryCard.headingText}
                  paragraphText={whyChooseData.primaryCard.paragraphText}
                />
                <ButtonSecondary text="Join the course " link="/login" />
              </Card>
            </div>
          </div>
          <div className="section-why--row2">
            {whyChooseData.secondaryCard.map((val, idx) => {
              return (
                <Card key={idx} bgColor={val.bgColor}>
                  <Normal {...val} />
                  <ButtonSecondary text="Join the course " link="/login" />
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
