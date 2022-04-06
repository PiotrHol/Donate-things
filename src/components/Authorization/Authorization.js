import React from "react";
import "./authorization.scss";
import decoration from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Authorization = ({
  isSignUp,
  onSubmit,
  loginError,
  loadingIcon,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
      <form className="authorization__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="authorization__form-content">
          <label className="authorization__form-label">
            Email
            <input
              {...register("email", {
                required: "Email jest wymagany!",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Podany email jest nieprawidłowy!",
                },
              })}
              className={classNames("authorization__form-input", {
                "authorization__form-input--error": errors.email,
              })}
              type="text"
            />
            {errors.email && (
              <p className="authorization__form-error">
                {errors.email.message}
              </p>
            )}
          </label>
          <label className="authorization__form-label">
            Hasło
            <input
              {...register("password", {
                required: "Hasło jest wymagane!",
                minLength: {
                  value: 6,
                  message: "Podane hasło jest za krótkie!",
                },
              })}
              className={classNames("authorization__form-input", {
                "authorization__form-input--error": errors.password,
              })}
              type="password"
            />
            {errors.password && (
              <p className="authorization__form-error">
                {errors.password.message}
              </p>
            )}
          </label>
          {isSignUp && (
            <label className="authorization__form-label">
              Powtórz hasło
              <input
                {...register("password2", {
                  required: "Ponownie wprowadź hasło!",
                  validate: (value) =>
                    value === watch("password") ||
                    "Hasła muszą być takie same!",
                })}
                className={classNames("authorization__form-input", {
                  "authorization__form-input--error": errors.password2,
                })}
                type="password"
              />
              {errors.password2 && (
                <p className="authorization__form-error">
                  {errors.password2.message}
                </p>
              )}
            </label>
          )}
          {loginError && (
            <p className="authorization__form-error authorization__form-login-error">
              Wystąpił błąd! Spróbuj ponownie!
            </p>
          )}
        </div>
        <div className="authorization__form-buttons">
          <Link
            className="authorization__form-btn"
            to={isSignUp ? "/logowanie" : "/rejestracja"}
          >
            {isSignUp ? "Zaloguj się" : "Załóż konto"}
          </Link>
          <button
            type="submit"
            className="authorization__form-btn authorization__form-btn--auth"
          >
            {isSignUp ? "Załóż konto" : "Zaloguj się"}
            {loadingIcon && (
              <FontAwesomeIcon
                className="summary__loading-icon"
                icon={faSpinner}
                pulse
              />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
