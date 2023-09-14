import "./FeaturedPortfolio.scss";
import { Section } from "../../Utilities/Section/Section";
import { Container } from "../../Utilities/Container/Container";
import { HeadingPrimary } from "../../Utilities/Heading/Sub-Component/HeadingPrimary";
import { HeadingTertiary } from "../../Utilities/Heading/Sub-Component/HeadingTertiary";
import { featuredPortfolioData } from "../../../Data/Data";

const FolioItem = ({ svg, headingText, text }) => {
  return (
    <div className="featured-portfolio-data">
      <div
        className="featured-portfolio-svg"
        dangerouslySetInnerHTML={{ __html: svg }}
      ></div>

      <HeadingPrimary headingText={headingText} />
      <HeadingTertiary text={text} />
    </div>
  );
};

export const FeaturedPortfolio = () => {
  return (
    <Section styleColor="">
      <Container>
        <div className="featured-portfolio">
          {featuredPortfolioData.map((val, key) => {
            return <FolioItem {...val} />;
          })}
        </div>
      </Container>
    </Section>
  );
};
