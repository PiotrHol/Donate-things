import React from "react";
import "../FormContent/formContent.scss";
import "./formFirstStep.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changePage, setThings } from "../../actions/formActions";

export const FormFirstStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      things: useSelector((state) => state.form.things),
    },
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setThings(data.things));
    dispatch(changePage(2));
  };
  return (
    <div className="form-content">
      <div className="form-content__important">
        <h2 className="form-content__important-title">Ważne!</h2>
        <p className="form-content__important-text">
          Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
          wiedzieć komu najlepiej je przekazać.
        </p>
      </div>
      <div className="form-content__main">
        <form className="form-content__form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="form-content__form-step">Krok 1/4</h3>
          <h2 className="form-content__form-title">Zaznacz co chcesz oddać:</h2>
          <div className="form-first-step">
            <label className="form-first-step__label">
              <input
                {...register("things", { required: true })}
                className="form-first-step__input"
                value="ubrania, które nadają się do ponownego użycia"
                type="radio"
              />
              <span className="form-first-step__span" />
              <p className="form-first-step__label-text">
                ubrania, które nadają się do ponownego użycia
              </p>
            </label>
            <label className="form-first-step__label">
              <input
                {...register("things", { required: true })}
                className="form-first-step__input"
                value="ubrania, do wyrzucenia"
                type="radio"
              />
              <span className="form-first-step__span" />
              <p className="form-first-step__label-text">
                ubrania, do wyrzucenia
              </p>
            </label>
            <label className="form-first-step__label">
              <input
                {...register("things", { required: true })}
                className="form-first-step__input"
                value="zabawki"
                type="radio"
              />
              <span className="form-first-step__span" />
              <p className="form-first-step__label-text">zabawki</p>
            </label>
            <label className="form-first-step__label">
              <input
                {...register("things", { required: true })}
                className="form-first-step__input"
                value="książki"
                type="radio"
              />
              <span className="form-first-step__span" />
              <p className="form-first-step__label-text">książki</p>
            </label>
            <label className="form-first-step__label">
              <input
                {...register("things", { required: true })}
                className="form-first-step__input"
                value="Inne"
                type="radio"
              />
              <span className="form-first-step__span" />
              <p className="form-first-step__label-text">Inne</p>
            </label>
            {errors.things && (
              <p className="form-content__form-error">
                Wybierz co chcesz oddać!
              </p>
            )}
            <button className="form-content__form-btn" type="submit">
              Dalej
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
