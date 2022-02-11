import React from "react";
import "./formPage.scss";
import { FormHeader } from "../FormHeader/FormHeader";
import { Contact } from "../Contact/Contact";
import { FormContent } from "../FormContent/FormContent";

export const FormPage = () => {
    return (
        <div className="form-page">
            <FormHeader />
            <FormContent />
            <Contact />
        </div>
    );
}