import "./WhyChoose.scss";

import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { Heading } from "./../../Utilities/Heading/Heading";
import { Card } from "./../../Utilities/Card/Card";
import { Normal } from "./../../Utilities/Card/Content/Normal";

import { whyChooseData } from "../../../Data/Data";

export const WhyChoose = () => {
  return (
    <Section styleColor="primary">
      <Container>
        <div className="section-why">
          <div className="section-why--row1">
            <img {...whyChooseData.whyImage} />
            <div className="section-why--row1__heading">
              <Heading {...whyChooseData.headingText} />
              <Card bgColor="card-white">
                <Normal
                  headingText={whyChooseData.primaryCard.headingText}
                  paragraphText={whyChooseData.primaryCard.paragraphText}
                />
              </Card>
            </div>
          </div>
          <div className="section-why--row2">
            {whyChooseData.secondaryCard.map((val, idx) => {
              return (
                <Card key={idx} bgColor="card-light-dark">
                  <Normal {...val} />
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
