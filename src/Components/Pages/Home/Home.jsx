import { Hero } from "./../../General/Hero/Hero";
import { WhyChoose } from "./../../General/WhyChoose/WhyChoose";
import { Workshop } from "./../../General/Workshop/Workshop";
import { MeetCoach } from "./../../General/MeetCoach/MeetCoach";
import { Testimonials } from "./../../General/Testimonials/Testimonials";
import { Contact } from "./../../General/Contact/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Workshop />
      <MeetCoach />
      <Testimonials />
      <Contact />
    </>
  );
};
