import { HeadingPage } from "./../../Utilities/Heading/HeadingPage";
import { PricingPlan } from "./../../General/PricingPlan/PricingPlan";
import { Trainer } from "./../../General/Trainer/Trainer";
import { Course } from "./../../General/Course/Course";
import { nutritionData } from "../../../Data/Data";
import { ComingSoon } from "../ComingSoon/ComingSoon";
export const Nutrition = () => {
  return (
    <>
      <HeadingPage {...nutritionData.heading} />
      <ComingSoon/>
      {/* <Course {...nutritionData.course} />
      <Trainer {...nutritionData.trainer} />
      <PricingPlan {...nutritionData.pricing} /> */}
    </>
  );
};
