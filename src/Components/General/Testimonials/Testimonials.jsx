import "./Testimonials.scss";
import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { Heading } from "./../../Utilities/Heading/Heading";
import { testimonialsData } from "../../../Data/Data";

const TestimonialView = ({ src, alt, text, author }) => {
  return (
    <div className="testimonial-main__data">
      <img src={src} alt={alt} />
      <p className="testimonial-main__data--text">{text}</p>
      <p className="testimonial-main__data--author"> {author} </p>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <Section styleColor="secondary">
      <Container>
        <div className="testimonial">
          <div className="testimonial-main">
            <Heading
              primary="Hear What Our Fitness Community Has to Say"
              secondary="testimonials"
            />
            <div className="testimonial-main--container">
              {testimonialsData.reviews.map((val, idx) => {
                return <TestimonialView {...val} key={idx} />;
              })}
            </div>
          </div>
          <div className="gallery">
            {testimonialsData.gallery.map((val, key) => {
              return <img key={key} {...val} />;
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
