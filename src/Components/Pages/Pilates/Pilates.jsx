import { HeadingPage } from "./../../Utilities/Heading/HeadingPage";
import { PricingPlan } from "./../../General/PricingPlan/PricingPlan";
import { Trainer } from "./../../General/Trainer/Trainer";
import { Course } from "./../../General/Course/Course";
import { pilatesData } from "../../../Data/Data";
export const Pilates = () => {
  return (
    <>
      <HeadingPage {...pilatesData.heading} />
      <Course {...pilatesData.course} />
      <Trainer {...pilatesData.trainer} />
      <PricingPlan {...pilatesData.pricing} />
    </>
  );
};
