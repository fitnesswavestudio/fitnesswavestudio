import { HeadingPage } from "./../../Utilities/Heading/HeadingPage";
import { PricingPlan } from "./../../General/PricingPlan/PricingPlan";
import { Trainer } from "./../../General/Trainer/Trainer";
import { Course } from "./../../General/Course/Course";
import { zumbaData } from "../../../Data/Data";
import { ComingSoon } from "../ComingSoon/ComingSoon";

export const Zumba = () => {
  return (
    <>
      <HeadingPage {...zumbaData.heading} />
      <ComingSoon/>
      {/* <Course {...zumbaData.course} />
      <Trainer {...zumbaData.trainer} />
      <PricingPlan {...zumbaData.pricing} /> */}
    </>
  );
};
