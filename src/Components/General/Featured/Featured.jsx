import "./Featured.scss";
import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { HeadingTertiary } from "./../../Utilities/Heading/Sub-Component/HeadingTertiary";
import { Paragraph } from "./../../Utilities/Paragraph/Paragraph";
import { featuredData } from "../../../Data/Data";

const FeaturedContent = ({ svg, paragraphText, headingText }) => {
  return (
    <div className="featured-data">
      <div className="featured-head">
        <div
          className="featured-svg"
          dangerouslySetInnerHTML={{ __html: svg }}
        ></div>
        <HeadingTertiary text={headingText} />
      </div>
      <div className="featured-content">
        <Paragraph paragraphText={paragraphText} />
      </div>
    </div>
  );
};
export const Featured = () => {
  return (
    <Section styleColor="">
      <Container>
        <div className="featured">
          {featuredData.map((val, key) => {
            console.log(val);
            return <FeaturedContent {...val} />;
          })}
        </div>
      </Container>
    </Section>
  );
};
