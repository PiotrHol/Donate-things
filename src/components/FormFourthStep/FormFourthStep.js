import React from "react";
import "../FormContent/formContent.scss";
import "./formFourthStep.scss";
import { useDispatch } from "react-redux";
import {
  changePage,
  setPickUpAddress,
  setPickUpDate,
} from "../../actions/formActions";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import classNames from "classnames";

export const FormFourthStep = () => {
  const dispatch = useDispatch();
  const street = useSelector((state) => state.form.pickUpAddress.street);
  const city = useSelector((state) => state.form.pickUpAddress.city);
  const postCode = useSelector((state) => state.form.pickUpAddress.postCode);
  const phone = useSelector((state) => state.form.pickUpAddress.phone);
  const date = useSelector((state) => state.form.pickUpDate.date);
  const time = useSelector((state) => state.form.pickUpDate.time);
  const note = useSelector((state) => state.form.pickUpDate.note);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      street,
      city,
      postCode,
      phone,
      date,
      time,
      note,
    },
  });

  const onSubmit = (data) => {
    dispatch(setPickUpAddress(data));
    dispatch(setPickUpDate(data));
    dispatch(changePage(5));
  };

  return (
    <div className="form-content">
      <div className="form-content__important">
        <h2 className="form-content__important-title">Ważne!</h2>
        <p className="form-content__important-text">
          Podaj adres oraz termin odbioru rzeczy.
        </p>
      </div>
      <div
        className={classNames("form-content__main", "form-fourth-step__main", {
          "form-fourth-step__main--error": Object.keys(errors).length,
        })}
      >
        <form className="form-content__form" onSubmit={handleSubmit(onSubmit)}>
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
                  <input
                    className="form-fourth-step__input"
                    type="text"
                    maxLength={30}
                    {...register("street", {
                      required: "Podaj ulicę z numerem domu/mieszkania!",
                      minLength: {
                        value: 2,
                        message: "Nazwa ulicy jest za krótka!",
                      },
                    })}
                  />
                </label>
                {errors.street && (
                  <p className="form-content__form-error form-fourth-step__error">
                    {errors.street.message}
                  </p>
                )}
                <label className="form-fourth-step__label">
                  <p className="form-fourth-step__input-text">Miasto</p>
                  <input
                    className="form-fourth-step__input"
                    type="text"
                    maxLength={20}
                    {...register("city", {
                      required: "Podaj miasto!",
                      minLength: {
                        value: 2,
                        message: "Nazwa miasta jest za krótka!",
                      },
                    })}
                  />
                </label>
                {errors.city && (
                  <p className="form-content__form-error form-fourth-step__error">
                    {errors.city.message}
                  </p>
                )}
                <label className="form-fourth-step__label">
                  <p className="form-fourth-step__input-text">
                    Kod
                    <br />
                    pocztowy
                  </p>
                  <input
                    className="form-fourth-step__input"
                    type="text"
                    placeholder="__-___"
                    maxLength={6}
                    {...register("postCode", {
                      required: "Kod pocztowy jest wymagany!",
                      pattern: {
                        value: /^[0-9]{2}-[0-9]{3}$/,
                        message: "Podaj poprawny kod pocztowy!",
                      },
                    })}
                  />
                </label>
                {errors.postCode && (
                  <p className="form-content__form-error form-fourth-step__error">
                    {errors.postCode.message}
                  </p>
                )}
                <label className="form-fourth-step__label">
                  <p className="form-fourth-step__input-text">
                    Numer
                    <br />
                    telefonu
                  </p>
                  <input
                    className="form-fourth-step__input"
                    type="text"
                    maxLength={9}
                    {...register("phone", {
                      required: "Numer telefonu jest wymagany!",
                      pattern: {
                        value: /^[0-9]{9}$/,
                        message: "Podaj poprawny numer telefonu!",
                      },
                    })}
                  />
                </label>
                {errors.phone && (
                  <p className="form-content__form-error form-fourth-step__error">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="form-fourth-step__column">
                <h3 className="form-fourth-step__column-title">
                  Termin odbioru:
                </h3>
                <label className="form-fourth-step__label">
                  <p className="form-fourth-step__input-text">Data</p>
                  <input
                    className="form-fourth-step__input"
                    type="date"
                    {...register("date", {
                      required: "Wybierz datę odbioru!",
                    })}
                  />
                </label>
                {errors.date && (
                  <p className="form-content__form-error form-fourth-step__error">
                    {errors.date.message}
                  </p>
                )}
                <label className="form-fourth-step__label">
                  <p className="form-fourth-step__input-text">Godzina</p>
                  <input
                    className="form-fourth-step__input"
                    type="time"
                    {...register("time", {
                      required: "Wybierz godzinę odbioru!",
                    })}
                  />
                </label>
                {errors.time && (
                  <p className="form-content__form-error form-fourth-step__error">
                    {errors.time.message}
                  </p>
                )}
                <label className="form-fourth-step__label form-fourth-step__label-area">
                  <p className="form-fourth-step__input-text">
                    Uwagi
                    <br />
                    dla kuriera
                  </p>
                  <textarea
                    className="form-fourth-step__input"
                    rows={4}
                    maxLength={100}
                    {...register("note")}
                    placeholder="(opcjonalnie)"
                  />
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
