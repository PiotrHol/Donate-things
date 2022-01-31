import React from "react";
import "./about.scss";
import decoration from "../../assets/Decoration.svg";
import signature from "../../assets/Signature.svg";

export const About = () => {
  return (
    <div name="about-us" className="about">
      <div className="about__image" />
      <div className="about__content">
        <h2 className="about__title">O nas</h2>
        <img className="about__decoration" src={decoration} alt="decoration" />
        <p className="about__text">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img className="about__signature" src={signature} alt="signature" />
      </div>
    </div>
  );
};
