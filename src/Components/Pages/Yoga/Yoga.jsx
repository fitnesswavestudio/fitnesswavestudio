import { HeadingPage } from "./../../Utilities/Heading/HeadingPage";
import { PricingPlan } from "./../../General/PricingPlan/PricingPlan";
import { Trainer } from "./../../General/Trainer/Trainer";
import { Course } from "./../../General/Course/Course";
import { yogaData } from "../../../Data/Data";

export const Yoga = () => {
  return (
    <>
      <HeadingPage {...yogaData.heading} />
      <Course {...yogaData.course} />
      <Trainer {...yogaData.trainer} />
      <PricingPlan {...yogaData.pricing} />
    </>
  );
};
