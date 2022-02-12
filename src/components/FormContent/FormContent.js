import React from "react";
import "./formContent.scss";
import { useSelector } from "react-redux";
import { FormFirstStep } from "../FormFirstStep/FormFirstStep";
import { FormSecondStep } from "../FormSecondStep/FormSecondStep";

export const FormContent = () => {
  const currentStep = useSelector((state) => state.form.currentStep);

  switch (currentStep) {
    case 1:
      return <FormFirstStep />;
    case 2:
      return <FormSecondStep />;
    default:
      return <FormFirstStep />;
  }
};
