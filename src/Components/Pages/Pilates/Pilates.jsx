import { HeadingPage } from "./../../Utilities/Heading/HeadingPage";
import { PricingPlan } from "./../../General/PricingPlan/PricingPlan";
import { Trainer } from "./../../General/Trainer/Trainer";
import { Course } from "./../../General/Course/Course";
import { pilatesData } from "../../../Data/Data";
import { ComingSoon } from "../ComingSoon/ComingSoon";
export const Pilates = () => {
  return (
    <>
      <HeadingPage {...pilatesData.heading} />
      <ComingSoon/>
      {/* <Course {...pilatesData.course} />
      <Trainer {...pilatesData.trainer} />
      <PricingPlan {...pilatesData.pricing} /> */}
    </>
  );
};
