import React from "react";
import "./formPage.scss";
import { FormHeader } from "../FormHeader/FormHeader";
import { Contact } from "../Contact/Contact";

export const FormPage = () => {
    return (
        <div className="form-page">
            <FormHeader />
            <Contact />
        </div>
    );
}