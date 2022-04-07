import React, { useEffect } from "react";
import "./home.scss";
import { HomeHeader } from "../HomeHeader/HomeHeader";
import { ThreeColumns } from "../ThreeColumns/ThreeColumns";
import { SimpleSteps } from "../SimpleSteps/SimpleSteps";
import { About } from "../About/About";
import { Fundations } from "../Fundations/Fundations";
import { Contact } from "../Contact/Contact";
import { scroller, Element, animateScroll } from "react-scroll";

export const Home = () => {
  useEffect(() => {
    const scrollTarget = sessionStorage.getItem("scrollTarget");
    sessionStorage.removeItem("scrollTarget");
    if (scrollTarget) {
      scroller.scrollTo(scrollTarget, {
        spy: true,
        smooth: true,
        duration: 1000,
      });
    } else {
      animateScroll.scrollToTop();
    }
  }, []);

  return (
    <div className="home">
      <HomeHeader />
      <ThreeColumns />
      <Element name="whats-going-on">
        <SimpleSteps />
      </Element>
      <Element name="about-us">
        <About />
      </Element>
      <Element name="who-we-help">
        <Fundations />
      </Element>
      <Contact />
    </div>
  );
};
