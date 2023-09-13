import { HeadingPage } from "./../../Utilities/Heading/HeadingPage";
import { PricingPlan } from "./../../General/PricingPlan/PricingPlan";
import { Trainer } from "./../../General/Trainer/Trainer";
import { Course } from "./../../General/Course/Course";
import { zumbaData } from "../../../Data/Data";

export const Zumba = () => {
  return (
    <>
      <HeadingPage {...zumbaData.heading} />
      <Course {...zumbaData.course} />
      <Trainer {...zumbaData.trainer} />
      <PricingPlan {...zumbaData.pricing} />
    </>
  );
};
