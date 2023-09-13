import "./Section.scss";
export const Section = ({ children, styleColor, id }) => {
  return (
    <section className={"section " + styleColor} id={id}>
      {children}
    </section>
  );
};
