import React from "react";
import "../FormContent/formContent.scss";
import "./thankYou.scss";
import decoration from "../../assets/Decoration.svg";

export const ThankYou = () => {
  return (
    <div className="form-content">
      <div className="form-content__main thank-you__main">
        <div className="thank-you">
          <h1 className="thank-you__title">
            Dziękujemy za przesłanie formularza
            <br />
            Na maila prześlemy wszelkie
            <br />
            informacje o odbiorze.
          </h1>
          <img
            className="thank-you__decoration"
            src={decoration}
            alt="decoration"
          />
        </div>
      </div>
    </div>
  );
};
