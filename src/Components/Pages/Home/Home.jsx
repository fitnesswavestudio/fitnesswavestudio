import { Hero } from "./../../General/Hero/Hero";
import { WhyChoose } from "./../../General/WhyChoose/WhyChoose";
import { Workshop } from "./../../General/Workshop/Workshop";
import { MeetCoach } from "./../../General/MeetCoach/MeetCoach";
import { Testimonials } from "./../../General/Testimonials/Testimonials";
import { Contact } from "./../../General/Contact/Contact";
import { Featured } from "../../General/Featured/Featured";
import { FeaturedPortfolio } from "../../General/Featured/FeaturedPortfolio";
import { Gallery } from "../../General/Gallery/Gallery";

export const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <WhyChoose />
      <Workshop />
      <MeetCoach />
      <FeaturedPortfolio />
      <Testimonials />
      <Gallery/>
      <Contact />
    </>
  );
};
