import "./MeetCoach.scss";
import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { HeadingParagraph } from "./../../Utilities/Heading/HeadingParagraph";
import { Button } from "./../../Utilities/Button/Button";
import { Card } from "./../../Utilities/Card/Card";
import { HeadingTertiary } from "./../../Utilities/Heading/Sub-Component/HeadingTertiary";
import { meetCoachData } from "../../../Data/Data";

const CardContent = ({ src, alt, trainerType, trainerName }) => {
  return (
    <>
      <img src={src} alt={alt} className="main-items__img" />
      <HeadingTertiary text={trainerName} />
      <p className="main-items__trainer-type">{trainerType}</p>
    </>
  );
};

export const MeetCoach = () => {
  return (
    <Section styleColor="primary">
      <Container>
        <div className="main-items">
          {meetCoachData.trainerInfo.map((val, idx) => {
            return (
              <Card key={idx} bgColor="card-white padding-top-lg">
                <CardContent {...val} />
              </Card>
            );
          })}

          <div className="main-items__heading">
            <HeadingParagraph {...meetCoachData.headingTexts} />
            <Button {...meetCoachData.buttonText} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
