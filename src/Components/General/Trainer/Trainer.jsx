import "./Trainer.scss";
import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { HeadingSecondary } from "./../../Utilities/Heading/Sub-Component/HeadingSecondary";
import { HeadingPrimary } from "./../../Utilities/Heading/Sub-Component/HeadingPrimary";
import { Paragraph } from "./../../Utilities/Paragraph/Paragraph";
import { HeadingTertiary } from "./../../Utilities/Heading/Sub-Component/HeadingTertiary";

export const Trainer = ({ headingData, socialLinks, trainerImageData }) => {
  const initialClassName = "trainer";
  const classNameImg = initialClassName + "-img";
  const classNameInfo = initialClassName + "-info";
  const className_Name = classNameInfo + "__name";
  const classNameSocialLinks = classNameInfo + "__social-links";
  const classNameSocialLink = classNameInfo + "__social-link";
  const socialIcons = ["facebook", "instagram", "twitter"];

  const [
    headingPrimaryText,
    headingSecondaryText,
    HeadingTertiaryText,
    paragraphText,
  ] = headingData;

  return (
    <Section styleColor="primary">
      <Container>
        <div className={initialClassName}>
          <div className={classNameInfo}>
            <HeadingSecondary headingText={headingSecondaryText} />
            <HeadingPrimary headingText={headingPrimaryText} />

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
  );
};
