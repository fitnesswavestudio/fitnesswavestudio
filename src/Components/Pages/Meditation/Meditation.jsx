import { HeadingPage } from "./../../Utilities/Heading/HeadingPage";
import { PricingPlan } from "./../../General/PricingPlan/PricingPlan";
import { Trainer } from "./../../General/Trainer/Trainer";
import { Course } from "./../../General/Course/Course";
import { meditationData } from "../../../Data/Data";
import { ComingSoon } from "../ComingSoon/ComingSoon";

export const Meditation = () => {
  return (
    <>
      <HeadingPage {...meditationData.heading} />
      <ComingSoon/>
      {/* <Course {...meditationData.course} />
      <Trainer {...meditationData.trainer} />
      <PricingPlan {...meditationData.pricing} /> */}
    </>
  );
};
