import React, { useState } from "react";
import "../FormContent/formContent.scss";
import "./formThirdStep.scss";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../actions/formActions";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import {
  setLocation,
  setOrganization,
  setWhoIsAssistance,
} from "../../actions/formActions";

export const FormThirdStep = () => {
  const location = useSelector((state) => state.form.location);
  const organizationName = useSelector((state) => state.form.organization);
  const whoIsAssistance = useSelector((state) => state.form.whoIsAssistance);
  const dispatch = useDispatch();
  const [isSelectMenu, setIsSelectMenu] = useState(false);
  const [selectValue, setSelectValue] = useState(
    organizationName || location === "0" ? "— wybierz —" : location
  );
  const selectOptions = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];
  const whoIsSupporting = [
    "dzieciom",
    "samotnym matkom",
    "bezdomnym",
    "niepełnosprawnym",
    "osobom starszym",
  ];
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      city: location,
      whoToHelp: whoIsAssistance.length
        ? whoIsAssistance
        : [...whoIsSupporting].fill(false),
      organization: organizationName,
    },
  });

  const selectHandle = (city) => {
    setSelectValue(city);
    setIsSelectMenu(false);
    setValue("city", city);
  };

  const onSubmit = ({ city, organization, whoToHelp }) => {
    if (organization) {
      dispatch(setOrganization(organization));
      dispatch(setLocation("0"));
    } else {
      dispatch(setLocation(city));
      dispatch(setOrganization(""));
    }
    dispatch(setWhoIsAssistance(whoToHelp));
    dispatch(changePage(4));
  };

  return (
    <div className="form-content">
      <div className="form-content__important">
        <h2 className="form-content__important-title">Ważne!</h2>
        <p className="form-content__important-text">
          Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
          wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
          celu ich pomocy.
        </p>
      </div>
      <div className="form-content__main form-third-step__main">
        <form className="form-content__form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="form-content__form-step">Krok 3/4</h3>
          <div className="form-third-step">
            <h2 className="form-content__form-title">Lokalizacja:</h2>
            <select
              className="form-content__default-select"
              {...register("city", {
                validate: (value) =>
                  watch("organization").length > 0 ||
                  value.length > 1 ||
                  "Wybierz miasto lub wpisz nazwę organizacji!",
              })}
            >
              <option value="0">0</option>
              {selectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="form-content__select-box form-third-step__select-box">
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
                <ul className="form-content__select-list form-third-step__select-list">
                  {selectOptions.map((option) => (
                    <li
                      key={option}
                      className="form-content__select-value"
                      onClick={() => selectHandle(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {errors.city && (
              <p className="form-content__form-error form-third-step__error">
                {errors.city.message}
              </p>
            )}
            <h3 className="form-third-step__title">Komu chcesz pomóc?</h3>
            <div className="form-third-step__checkbox">
              <ul className="form-third-step__checkbox-list">
                {whoIsSupporting.map((who, index) => (
                  <li
                    key={index}
                    className="form-third-step__checkbox-list-item"
                  >
                    <label>
                      <input
                        type="checkbox"
                        className="form-third-step__checkbox-input"
                        value={who}
                        {...register(`whoToHelp.${index}`, {
                          validate: () =>
                            watch("whoToHelp").some((value) => value),
                        })}
                      />
                      <p className="form-third-step__checkbox-text">{who}</p>
                    </label>
                  </li>
                ))}
              </ul>
              {errors.whoToHelp && (
                <p className="form-content__form-error">
                  Wybierz przynajmniej jedną grupę osób!
                </p>
              )}
            </div>
            <label>
              <h3 className="form-third-step__title">
                Wpisz nazwę konkretnej organizacji (opcjonalnie)
              </h3>
              <input
                className="form-third-step__text-input"
                type="text"
                maxLength={30}
                {...register("organization")}
              />
            </label>
            <div className="form-content__form-btn-wrapper">
              <button
                className="form-content__form-btn"
                type="button"
                onClick={() => dispatch(changePage(2))}
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
