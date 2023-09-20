import "./Gallery.scss";
import { Section } from "../../Utilities/Section/Section";
import { Container } from "../../Utilities/Container/Container";
import { testimonialsData } from "../../../Data/Data";



export const Gallery = () => {
  return (
    <Section styleColor="secondary">
      <Container>
        <div className="gallery">
          {testimonialsData.gallery.map((val, key) => {
            return <img key={key} {...val} />;
          })}
        </div>
      </Container>
    </Section>
  );
};
