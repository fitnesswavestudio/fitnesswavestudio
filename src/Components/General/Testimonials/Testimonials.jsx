import "./Testimonials.scss";
import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { Heading } from "./../../Utilities/Heading/Heading";
import { testimonialsData } from "../../../Data/Data";
import { CCarousel, CCarouselItem } from '@coreui/react';
import '@coreui/icons/css/all.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import React, { useState, useEffect } from 'react';

const TestimonialView = ({ src, alt, text, author }) => {
  return (
    <div className="testimonial-main__data">
      <p className="testimonial-main__data--text">{text}</p>
      <p className="testimonial-main__data--author"> {author} </p>
      <div className="image-respondent">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const items = testimonialsData.reviews;
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 7000); // 7 seconds interval

    return () => clearInterval(intervalId);
  }, [items.length]);
  return (
    <Section styleColor="secondary">
      <Container>
        <div className="testimonial">
          <div className="testimonial-main">
            <Heading
              primary="Hear What Our Fitness Community Has to Say"
              secondary="testimonials"
            />
            <Section>
              <CCarousel activeIndex={activeIndex} onSlideChange={handleSlideChange}>
                  {testimonialsData.reviews.map((val, idx) => (
                      <CCarouselItem key={idx}>
                        <div className="bg-color-carousel carousel-item-content">
                          <TestimonialView {...val} key={idx} />
                        </div>
                      </CCarouselItem>
                    ))}
              </CCarousel>
            </Section>
          </div>
        </div>
      </Container>
    </Section>
  );
};
