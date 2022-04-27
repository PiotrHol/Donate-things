import React, { useEffect } from "react";
import "../FormContent/formContent.scss";
import "./thankYou.scss";
import decoration from "../../assets/Decoration.svg";
import { useDispatch } from "react-redux";
import { clearForm } from "../../actions/formActions";

export const ThankYou = () => {
  const dispatch = useDispatch();

  useEffect(() => () => dispatch(clearForm()), []);

  return (
    <div className="form-content">
      <div className="form-content__main thank-you__main">
        <div className="thank-you">
          <h1 className="thank-you__title">
            Dziękujemy za przesłanie formularza.
            <br />
            Skontaktujemy się po
            <br />
            weryfikacji zgłoszenia.
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
