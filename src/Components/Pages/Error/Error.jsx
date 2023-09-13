import { HeadingPrimary } from "../../Utilities/Heading/Sub-Component/HeadingPrimary";
import { HeadingTertiary } from "../../Utilities/Heading/Sub-Component/HeadingTertiary";
import "./Error.scss";

export const Error = () => {
  return (
    <div className="error">
      <div className="error-head">
        <ion-icon name="bug-outline"></ion-icon>
        <HeadingPrimary headingText="Error 404" />
      </div>
      <HeadingTertiary text="The page you are looking for cannot be found." />
    </div>
  );
};
