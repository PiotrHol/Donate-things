import React, { useState } from "react";
import "../FormContent/formContent.scss";
import "./formSecondStep.scss";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions/formActions";

export const FormSecondStep = () => {
  const [isSelectMenu, setIsSelectMenu] = useState(false);
  const [selectValue, setSelectValue] = useState("— wybierz —");
  const dispatch = useDispatch();

  const selectHandle = (event) => {
    setSelectValue(event.target.value);
    setIsSelectMenu(false);
  };

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
              <div className="form-second-step__select-box">
                <div
                  className="form-second-step__select"
                  onClick={() => setIsSelectMenu((prev) => !prev)}
                >
                  <p>{selectValue}</p>
                  <span
                    className={classNames("form-second-step__select-arrow", {
                      "form-second-step__select-arrow--down": !isSelectMenu,
                      "form-second-step__select-arrow--up": isSelectMenu,
                    })}
                  />
                </div>
                {isSelectMenu && (
                  <ul className="form-second-step__select-list">
                    <li
                      className="form-second-step__select-value"
                      value={1}
                      onClick={selectHandle}
                    >
                      1
                    </li>
                    <li
                      className="form-second-step__select-value"
                      value={2}
                      onClick={selectHandle}
                    >
                      2
                    </li>
                    <li
                      className="form-second-step__select-value"
                      value={3}
                      onClick={selectHandle}
                    >
                      3
                    </li>
                    <li
                      className="form-second-step__select-value"
                      value={4}
                      onClick={selectHandle}
                    >
                      4
                    </li>
                    <li
                      className="form-second-step__select-value"
                      value={5}
                      onClick={selectHandle}
                    >
                      5
                    </li>
                  </ul>
                )}
              </div>
            </label>
            <div className="form-content__form-btn-wrapper">
              <button className="form-content__form-btn" type="button" onClick={() => dispatch(changePage(1))}>Wstecz</button>
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
