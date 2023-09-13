import "./Course.scss";
import { Section } from "./../../Utilities/Section/Section";
import { Container } from "./../../Utilities/Container/Container";
import { HeadingParagraph } from "./../../Utilities/Heading/HeadingParagraph";
import { VideoComponent } from "./../../Utilities/VideoComponent/VideoComponent";

const Benefit = ({ className, data }) => {
  const classNameBenefits = className + "-benefits";
  return (
    <ul className={classNameBenefits}>
      {data.map((val, key) => {
        return <ListItem key={key} val={val} />;
      })}
    </ul>
  );
};

const ListItem = ({ val }) => {
  return (
    <li>
      <span className="icon-text">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        {val}
      </span>
    </li>
  );
};

export const Course = ({ headingData, videoUrl, benefitsData }) => {
  const initialClassName = "course";
  const classNameMain = initialClassName + "--main";
  const classNameMainText = classNameMain + "__text";
  const classNameMainVideo = classNameMain + "__video";
  const [primary, secondary, paragraphText] = headingData;
  const classNameCategories = initialClassName + "-categories";

  return (
    <Section styleColor="">
      <Container>
        <div className={initialClassName}>
          <div className={classNameMain}>
            <div className={classNameMainText}>
              <HeadingParagraph
                primary={primary}
                secondary={secondary}
                paragraphText={paragraphText}
              />
              <Benefit className={classNameMainText} data={benefitsData} />
            </div>

            <div className={classNameMainVideo}>
              <VideoComponent videoUrl={videoUrl} />
            </div>
          </div>
          <div className={classNameCategories}></div>
        </div>
      </Container>
    </Section>
  );
};
