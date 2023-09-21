import "./Gallery.scss";
import { Section } from "../../Utilities/Section/Section";
import { Container } from "../../Utilities/Container/Container";
import { testimonialsData } from "../../../Data/Data";
import { CCarousel, CCarouselItem } from '@coreui/react';
import { Heading } from "./../../Utilities/Heading/Heading";
import '@coreui/icons/css/all.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import React, { useState, useEffect } from 'react';

export const Gallery = () => {
  const items = testimonialsData.reviews;
  const [activeIndex, setActiveIndex] = useState(0);
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
    <Section styleColor="secondary">
      <Container>
        <div className="gallery-primary">
            <Heading
              primary="Zen Moments: Yoga Class Gallery Highlights"
              secondary="Gallery"
            />
            <Section  className="gallery-primary-main">
              <CCarousel activeIndex={activeIndex} onSlideChange={handleSlideChange}>
                  {testimonialsData.gallery.map((val, key) => (
                      <CCarouselItem key={key}>
                        <div className="bg-color-carousel carousel-item-content">
                          <img key={key} {...val}/>
                        </div>
                      </CCarouselItem>
                    ))}
              </CCarousel>
            </Section>
          </div>
      </Container>
    </Section>
  );
};