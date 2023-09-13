import "./HeadingPage.scss";

export const HeadingPage = ({ text, className }) => {
  return (
    <div className={"page-heading" + className}>
      <div className="page-heading__text-over">
        <h3> {text} </h3>
      </div>
    </div>
  );
};
