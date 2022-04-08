import React from "react";
import "./formHeader.scss";
import { Navigation } from "../Navigation/Navigation";
import decoration from "../../assets/Decoration.svg";

export const FormHeader = () => {
  return (
    <div className="form-header">
      <Navigation inHomePage={false} inFormPage={true} />
      <div className="form-header__content">
        <h2 className="form-header__title">
          Oddaj rzeczy, których już nie chcesz
        </h2>
        <h2 className="form-header__title form-header__title--capital">
          Potrzebującym
        </h2>
        <img src={decoration} className="form-header__img" alt="decoration" />
        <h2 className="form-header__text">Wystarczą 4 proste kroki:</h2>
        <div className="form-header__steps">
          <div className="form-header__step">
            <h3 className="form-header__step-number">1</h3>
            <p className="form-header__step-text">
              Wybierz
              <br />
              rzeczy
            </p>
          </div>
          <div className="form-header__step">
            <h3 className="form-header__step-number">2</h3>
            <p className="form-header__step-text">
              Spakuj je
              <br />w worki
            </p>
          </div>
          <div className="form-header__step">
            <h3 className="form-header__step-number">3</h3>
            <p className="form-header__step-text">
              Wybierz
              <br />
              fundację
            </p>
          </div>
          <div className="form-header__step">
            <h3 className="form-header__step-number">4</h3>
            <p className="form-header__step-text">
              Zamów
              <br />
              kuriera
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
