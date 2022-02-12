import React from "react";
import "../FormContent/formContent.scss";
import "./formSecondStep.scss";

export const FormSecondStep = () => {
  return (
    <div className="form-content">
      <div className="form-content__important">
        <h2 className="form-content__important-title">Ważne!</h2>
        <p className="form-content__important-text">
          Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
          jak poprawnie spakować rzeczy znajdziesz TUTAJ.
        </p>
      </div>
      <div className="form-content__main">
        <form className="form-content__form">
          <h3 className="form-content__form-step">Krok 2/4</h3>
          <h2 className="form-content__form-title">
            Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
          </h2>
          <div className="form-second-step">
            <label className="form-second-step__label">
                <p className="form-second-step__label-text">Liczba 60l worków:</p>
                <select className="form-second-step__select" defaultValue="choose">
                    <option className="form-second-step__select-value" hidden value="choose">— wybierz —</option>
                    <option className="form-second-step__select-value" value={1}>1</option>
                    <option className="form-second-step__select-value" value={2}>2</option>
                    <option className="form-second-step__select-value" value={3}>3</option>
                    <option className="form-second-step__select-value" value={4}>4</option>
                    <option className="form-second-step__select-value" value={5}>5</option>
                </select>
            </label>
            <div className="form-content__form-btn-wrapper">
              <button className="form-content__form-btn">Wstecz</button>
              <button className="form-content__form-btn" type="submit">
                Dalej
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
