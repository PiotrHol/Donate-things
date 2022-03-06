import React, { useState } from "react";
import "../FormContent/formContent.scss";
import "./formSecondStep.scss";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { changePage, setBags } from "../../actions/formActions";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export const FormSecondStep = () => {
  const numberOfBags = useSelector((state) => state.form.bags);
  const [isSelectMenu, setIsSelectMenu] = useState(false);
  const [selectValue, setSelectValue] = useState(
    numberOfBags ? numberOfBags : "— wybierz —"
  );
  const dispatch = useDispatch();
  const selectOptions = [1, 2, 3, 4, 5];
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bags: numberOfBags,
    },
  });

  const selectHandle = (event) => {
    setSelectValue(event.target.value);
    setIsSelectMenu(false);
    setValue("bags", event.target.value);
  };

  const onSubmit = ({ bags }) => {
    dispatch(setBags(bags));
    dispatch(changePage(3));
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
        <form className="form-content__form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="form-content__form-step">Krok 2/4</h3>
          <h2 className="form-content__form-title">
            Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
          </h2>
          <div className="form-second-step">
            <label className="form-second-step__label">
              <p className="form-second-step__label-text">Liczba 60l worków:</p>
              <select
                className="form-content__default-select"
                {...register("bags", {
                  min: {
                    value: 1,
                    message: "Podaj liczbę worków!",
                  },
                })}
              >
                <option value={0}>0</option>
                {selectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="form-content__select-box">
                <div
                  className="form-content__select"
                  onClick={() => setIsSelectMenu((prev) => !prev)}
                >
                  <p>{selectValue}</p>
                  <span
                    className={classNames("form-content__select-arrow", {
                      "form-content__select-arrow--down": !isSelectMenu,
                      "form-content__select-arrow--up": isSelectMenu,
                    })}
                  />
                </div>
                {isSelectMenu && (
                  <ul className="form-content__select-list">
                    {selectOptions.map((option) => (
                      <li
                        key={option}
                        className="form-content__select-value"
                        value={option}
                        onClick={selectHandle}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </label>
            <div className="form-second-step__buttons">
              {errors.bags && (
                <p className="form-content__form-error">
                  {errors.bags.message}
                </p>
              )}
              <div className="form-content__form-btn-wrapper">
                <button
                  className="form-content__form-btn"
                  type="button"
                  onClick={() => dispatch(changePage(1))}
                >
                  Wstecz
                </button>
                <button className="form-content__form-btn" type="submit">
                  Dalej
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
