import { Container } from "./../Utilities/Container/Container";
import { HeadingTertiary } from "./../Utilities/Heading/Sub-Component/HeadingTertiary";
import "./Footer.scss";
import { footerData } from "../../Data/Data";

const UnorderedList = ({ className, data }) => {
  return (
    <ul className={className}>
      {data.map((val, key) => {
        return (
          <ListItem
            key={key}
            className={className + "-link"}
            icon={val.icon}
            text={val.text}
            href={val.src}
          />
        );
      })}
    </ul>
  );
};

const ListItem = ({ className, icon, text, href }) => {
  const ico = <ion-icon name={icon}></ion-icon>;
  const content =
    text === undefined ? (
      <a href={href} className={className}>
        {ico}
      </a>
    ) : icon === undefined ? (
      <a href={href} className={className}>
        {text}
      </a>
    ) : (
      <>
        {ico}
        {text}
      </>
    );
  return <li>{content}</li>;
};

const FooterLists = ({ className, text, children }) => {
  return (
    <div className={"footer-main__" + className}>
      <HeadingTertiary text={text} />
      {children}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-main">
          <FooterLists className="logo" text={footerData.logo.text}>
            <p className="footer-main__logo-text">{footerData.logo.tagline}</p>
          </FooterLists>

          <FooterLists className="getintouch" text={footerData.getintouch.text}>
            <UnorderedList
              className="footer-main__list"
              data={footerData.getintouch.address}
            />
          </FooterLists>

          <FooterLists className="quicklinks" text={footerData.quicklinks.text}>
            <UnorderedList
              className="footer-main__list"
              data={footerData.quicklinks.links}
            />
          </FooterLists>

          <FooterLists className="location" text={footerData.location.text}>
          <iframe width="400" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=400&amp;height=200&amp;hl=en&amp;q=%20Connaught%20place%20delhi+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

          </FooterLists>
        </div>
        <div className="footer-copyright">
          <p className="footer-copyright__text">
            Copyright &copy;. All rights reserved
          </p>
          <UnorderedList
            className="footer-copyright--social-links"
            data={footerData.socialLinks}
          />
        </div>
      </Container>
    </footer>
  );
};
