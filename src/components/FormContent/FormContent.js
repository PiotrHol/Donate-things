import React from "react";
import "./formContent.scss";
import { useSelector } from "react-redux";
import { FormFirstStep } from "../FormFirstStep/FormFirstStep";

export const FormContent = () => {
  const currentStep = useSelector((state) => state.form.currentStep);

  switch (currentStep) {
    case 1:
      return <FormFirstStep />;
    default:
      return <FormFirstStep />;
  }
};
