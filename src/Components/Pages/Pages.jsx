import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { About } from "./About/About";
import { Home } from "./Home/Home";
import { Yoga } from "./Yoga/Yoga";
import { Pilates } from "./Pilates/Pilates";
import { StrengthTraining } from "./StrengthTraining/StrengthTraining";
import { Zumba } from "./Zumba/Zumba";
import { Meditation } from "./Meditation/Meditation";
import { Nutrition } from "./Nutrition/Nutrition";
import { Routes, Route } from "react-router-dom";
import { Error } from "./../Pages/Error/Error";
import { Thankyou } from "./Thankyou/Thankyou";

export const Pages = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="home"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="yoga"
          element={
            <>
              <Header />
              <Yoga />
              <Footer />
            </>
          }
        />
        <Route
          path="thankyou"
          element={
            <>
              <Header />
              <Thankyou />
              <Footer />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="pilates"
          element={
            <>
              <Header />
              <Pilates />
              <Footer />
            </>
          }
        />
        <Route
          path="strength-training"
          element={
            <>
              <Header />
              <StrengthTraining />
              <Footer />
            </>
          }
        />
        <Route
          path="zumba"
          element={
            <>
              <Header />
              <Zumba />
              <Footer />
            </>
          }
        />
        <Route
          path="meditation"
          element={
            <>
              <Header />
              <Meditation />
              <Footer />
            </>
          }
        />
        <Route
          path="nutrition"
          element={
            <>
              <Header />
              <Nutrition />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
