import "./Trainer.scss";
import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { HeadingSecondary } from "./../../Utilities/Heading/Sub-Component/HeadingSecondary";
import { HeadingPrimary } from "./../../Utilities/Heading/Sub-Component/HeadingPrimary";
import { Paragraph } from "./../../Utilities/Paragraph/Paragraph";
import { HeadingTertiary } from "./../../Utilities/Heading/Sub-Component/HeadingTertiary";
import React, { useState, useEffect } from 'react';
import { CCarousel, CCarouselItem } from '@coreui/react';
import '@coreui/icons/css/all.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { yogaData } from "../../../Data/Data";

export const Trainer = ({ headingData, socialLinks, trainerImageData }) => {
  const initialClassName = "trainer";
  const classNameImg = initialClassName + "-img";
  const classNameInfo = initialClassName + "-info";
  const className_Name = classNameInfo + "__name";

  const [
    HeadingTertiaryText,
    paragraphText,
  ] = headingData;

  return (
    <div>
    <Section styleColor="primary">
      <Container>
        <div className={initialClassName}>
          <div className={classNameInfo}>
            <div className={className_Name}>
              <HeadingTertiary text={HeadingTertiaryText} />
              <Paragraph paragraphText={paragraphText} />
            </div>
          </div>
          <img
            src={trainerImageData.src}
            alt={trainerImageData.alt}
            className={classNameImg}
          />
        </div>
      </Container>
    </Section>
    </div>
  );
};

export const TrainerComponent = () => {
  const initialClassName = "trainer";
  const classNameInfo = initialClassName + "-info";
  const [activeIndex, setActiveIndex] = useState(0);
  const [
    headingPrimaryText,
    headingSecondaryText
  ] = yogaData.trainerComponent.headingData;
  const items = yogaData.trainers;
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 10000); // 10 seconds interval

    return () => clearInterval(intervalId);
  }, [items.length]);

  return (
    <Section styleColor="primary">
      <Section styleColor="primary">
        <Container>
          <div className={initialClassName}>
            <div className={classNameInfo}>
              <HeadingSecondary headingText={headingSecondaryText} />
              <HeadingPrimary headingText={headingPrimaryText} />
            </div>
          </div>
        </Container>
      </Section>
      <Section styleColor="primary">
        <CCarousel activeIndex={activeIndex} onSlideChange={handleSlideChange}>
              {yogaData.trainers.map((item, index) => (
                <CCarouselItem key={index}>
                  <div className="carousel-item-content">
                    <Trainer {...item} />
                  </div>
                </CCarouselItem>
              ))}
        </CCarousel>
      </Section>
    </Section>
    
  );
};

export default TrainerComponent;
