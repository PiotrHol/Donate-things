import React, { useEffect } from "react";
import "./formPage.scss";
import { FormHeader } from "../FormHeader/FormHeader";
import { Contact } from "../Contact/Contact";
import { FormContent } from "../FormContent/FormContent";
import { animateScroll } from "react-scroll";

export const FormPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <div className="form-page">
      <FormHeader />
      <FormContent />
      <Contact />
    </div>
  );
};
