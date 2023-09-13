import { HeadingPage } from "./../../Utilities/Heading/HeadingPage";
import { PricingPlan } from "./../../General/PricingPlan/PricingPlan";
import { Trainer } from "./../../General/Trainer/Trainer";
import { Course } from "./../../General/Course/Course";
import { nutritionData } from "../../../Data/Data";
export const Nutrition = () => {
  return (
    <>
      <HeadingPage {...nutritionData.heading} />
      <Course {...nutritionData.course} />
      <Trainer {...nutritionData.trainer} />
      <PricingPlan {...nutritionData.pricing} />
    </>
  );
};
