import React, { useEffect } from "react";
import "./formContent.scss";
import { useSelector } from "react-redux";
import { FormFirstStep } from "../FormFirstStep/FormFirstStep";
import { FormSecondStep } from "../FormSecondStep/FormSecondStep";
import { FormThirdStep } from "../FormThirdStep/FormThirdStep";
import { FormFourthStep } from "../FormFourthStep/FormFourthStep";
import { Summary } from "../Summary/Summary";
import { ThankYou } from "../ThankYou/ThankYou";
import { scroller, Element } from "react-scroll";

export const FormContent = () => {
  const currentStep = useSelector((state) => state.form.currentStep);

  useEffect(() => {
    scroller.scrollTo("scrollContent", {
      spy: true,
      smooth: true,
      duration: 1000,
    });
  }, [currentStep]);

  switch (currentStep) {
    case 1:
      return (
        <Element name="scrollContent">
          <FormFirstStep />
        </Element>
      );
    case 2:
      return (
        <Element name="scrollContent">
          <FormSecondStep />
        </Element>
      );
    case 3:
      return (
        <Element name="scrollContent">
          <FormThirdStep />
        </Element>
      );
    case 4:
      return (
        <Element name="scrollContent">
          <FormFourthStep />
        </Element>
      );
    case 5:
      return (
        <Element name="scrollContent">
          <Summary />
        </Element>
      );
    case 6:
      return (
        <Element name="scrollContent">
          <ThankYou />
        </Element>
      );
    default:
      return (
        <Element name="scrollContent">
          <FormFirstStep />
        </Element>
      );
  }
};
