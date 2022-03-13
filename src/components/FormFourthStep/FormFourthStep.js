import React from "react";
import "../FormContent/formContent.scss";
import "./formFourthStep.scss";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions/formActions";

export const FormFourthStep = () => {
  const dispatch = useDispatch();

  return (
    <div className="form-content">
      <div className="form-content__important">
        <h2 className="form-content__important-title">Ważne!</h2>
        <p className="form-content__important-text">
          Podaj adres oraz termin odbioru rzeczy.
        </p>
      </div>
      <div className="form-content__main form-fourth-step__main">
        <form className="form-content__form">
          <h3 className="form-content__form-step">Krok 4/4</h3>
          <h2 className="form-content__form-title">
            Podaj adres oraz termin odbioru rzeczy przez kuriera
          </h2>
          <div className="form-fourth-step">
            <div className="form-fourth-step__column-wrapper">
              <div className="form-fourth-step__column">
                <h3 className="form-fourth-step__column-title">
                  Adres odbioru:
                </h3>
                <label className="form-fourth-step__label">
                  <p className="form-fourth-step__input-text">Ulica</p>
                  <input className="form-fourth-step__input" type="text" />
                </label>
                <label className="form-fourth-step__label">
                  <p className="form-fourth-step__input-text">Miasto</p>
                  <input className="form-fourth-step__input" type="text" />
                </label>
                <label className="form-fourth-step__label">
                  <p className="form-fourth-step__input-text">Kod<br />pocztowy</p>
                  <input className="form-fourth-step__input" type="text" placeholder="__-___" />
                </label>
                <label className="form-fourth-step__label">
                  <p className="form-fourth-step__input-text">Numer<br />telefonu</p>
                  <input className="form-fourth-step__input" type="text" />
                </label>
              </div>
              <div className="form-fourth-step__column">
                <h3 className="form-fourth-step__column-title">
                  Termin odbioru:
                </h3>
                <label className="form-fourth-step__label">
                  <p className="form-fourth-step__input-text">Data</p>
                  <input className="form-fourth-step__input" type="date" />
                </label>
                <label className="form-fourth-step__label">
                  <p className="form-fourth-step__input-text">Godzina</p>
                  <input className="form-fourth-step__input" type="time" />
                </label>
                <label className="form-fourth-step__label form-fourth-step__label-area">
                  <p className="form-fourth-step__input-text">Uwagi<br />dla kuriera</p>
                  <textarea className="form-fourth-step__input" rows={4} />
                </label>
              </div>
            </div>
            <div className="form-content__form-btn-wrapper">
              <button
                className="form-content__form-btn"
                type="button"
                onClick={() => dispatch(changePage(3))}
              >
                Wstecz
              </button>
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
