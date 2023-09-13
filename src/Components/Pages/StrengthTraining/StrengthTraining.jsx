import { HeadingPage } from "./../../Utilities/Heading/HeadingPage";
import { PricingPlan } from "./../../General/PricingPlan/PricingPlan";
import { Trainer } from "./../../General/Trainer/Trainer";
import { Course } from "./../../General/Course/Course";
import { strengthTrainingData } from "../../../Data/Data";

export const StrengthTraining = () => {
  return (
    <>
      <HeadingPage {...strengthTrainingData.heading} />
      <Course {...strengthTrainingData.course} />
      <Trainer {...strengthTrainingData.trainer} />
      <PricingPlan {...strengthTrainingData.pricing} />
    </>
  );
};
