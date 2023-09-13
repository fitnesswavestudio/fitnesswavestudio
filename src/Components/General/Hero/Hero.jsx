import { Button } from "./../../Utilities/Button/Button";
import { Container } from "./../../Utilities/Container/Container";
import { Section } from "./../../Utilities/Section/Section";
import { HeadingParagraph } from "./../../Utilities/Heading/HeadingParagraph";
import { PlayButton } from "./../../Utilities/Button/PlayButton";
import "./Hero.scss";
import { heroData } from "../../../Data/Data";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const getStartedHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <Section styleColor="">
      <Container>
        <div className="hero">
          <div className="hero-text-box">
            <HeadingParagraph {...heroData.heroText} />
            <div className="hero-text-box__buttons">
              <Button {...heroData.heroBtn} clickHandler={getStartedHandler} />
              <PlayButton />
            </div>
          </div>
          <div className="hero-img-box">
            <img {...heroData.heroImg}></img>
          </div>
        </div>
      </Container>
    </Section>
  );
};
