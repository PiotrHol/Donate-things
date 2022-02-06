import React from "react";
import "./authorization.scss";
import decoration from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";

export const Authorization = ({ isSignUp, authBtnHandler }) => {
  return (
    <div className="authorization">
      <h2 className="authorization__title">
        {isSignUp ? "Załóż konto" : "Zaloguj się"}
      </h2>
      <img
        className="authorization__decoration"
        src={decoration}
        alt="decoration"
      />
      <form className="authorization__form">
        <div className="authorization__form-content">
          <label className="authorization__form-label">
            Email
            <input className="authorization__form-input" type="text" />
          </label>
          <label className="authorization__form-label">
            Hasło
            <input className="authorization__form-input" type="text" />
          </label>
          {isSignUp && (
            <label className="authorization__form-label">
              Powtórz hasło
              <input className="authorization__form-input" type="text" />
            </label>
          )}
        </div>
        <div className="authorization__form-buttons">
          <Link
            className="authorization__form-btn"
            to={isSignUp ? "/logowanie" : "/rejestracja"}
          >
            {isSignUp ? "Zaloguj się" : "Załóż konto"}
          </Link>
          <button className="authorization__form-btn authorization__form-btn--auth">
            {isSignUp ? "Załóż konto" : "Zaloguj się"}
          </button>
        </div>
      </form>
    </div>
  );
};
