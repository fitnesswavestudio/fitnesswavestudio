import { HeadingPage } from "./../../Utilities/Heading/HeadingPage";
import { PricingPlan } from "./../../General/PricingPlan/PricingPlan";
import { Trainer } from "./../../General/Trainer/Trainer";
import { Course } from "./../../General/Course/Course";
import { strengthTrainingData } from "../../../Data/Data";
import { ComingSoon } from "../ComingSoon/ComingSoon";

export const StrengthTraining = () => {
  return (
    <>
      <HeadingPage {...strengthTrainingData.heading} />
      <ComingSoon/>
      {/* <Course {...strengthTrainingData.course} />
      <Trainer {...strengthTrainingData.trainer} />
      <PricingPlan {...strengthTrainingData.pricing} /> */}
    </>
  );
};
