import "./Workshop.scss";

import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { HeadingParagraph } from "./../../Utilities/Heading/HeadingParagraph";
import { Button } from "./../../Utilities/Button/Button";
import { VideoComponent } from "./../../Utilities/VideoComponent/VideoComponent";
import { workshopData } from "../../../Data/Data";
import { redirect, useNavigate } from "react-router-dom";

export const Workshop = () => {
  const navigate = useNavigate();

  const joinWorkshopHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <Section styleColor="">
      <Container>
        <div className="workshop">
          <div className="workshop--main">
            <div className="workshop--main__text">
              <HeadingParagraph {...workshopData.headingText} />

              <div className="workshop--main__button">
                <Button
                  {...workshopData.buttonText}
                  clickHandler={joinWorkshopHandler}
                />
                <a href="#" className="workshop--main__link">
                  See More &rarr;
                </a>
              </div>
            </div>

            <div className="workshop--main__video">
              <VideoComponent videoUrl={workshopData.videoUrl} />
            </div>
          </div>
          <div className="workshop--secodary"></div>
        </div>
      </Container>
    </Section>
  );
};
