import "./AboutUS.scss";
import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { HeadingParagraph } from "./../../Utilities/Heading/HeadingParagraph";
import { VideoComponent } from "./../../Utilities/VideoComponent/VideoComponent";
import { aboutData } from "../../../Data/Data";

export const AboutUS = () => {
  return (
    <>
      <Section styleColor="secondary">
        <Container>
          <div className="about">
            <div className="about--main">
              <div className="about--main__text">
                <HeadingParagraph {...aboutData.headingText} />
              </div>

              <div className="about--main__video">
                <VideoComponent videoUrl={aboutData.videoUrl} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
