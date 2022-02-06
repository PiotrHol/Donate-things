import React, { useState } from "react";
import "./contact.scss";
import decoration from "../../assets/Decoration.svg";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isFetchSuccess, setIsFetchSuccess] = useState(false);

  const onSubmit = async (dataToSet) => {
    try {
      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          body: JSON.stringify(dataToSet),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();

      if (responseData.status === "success") {
        setIsFetchSuccess(true);
        reset();
        const timeout = setTimeout(() => {
          setIsFetchSuccess(false);
          clearTimeout(timeout);
        }, 5000);
      }
    } catch (error) {
      console.log(console.error);
    }
  };

  return (
    <div name="contact-and-footer" className="contact">
      <div className="contact__content">
        <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="contact__title">Skontaktuj się z nami</h2>
          <img
            className="contact__decoration"
            src={decoration}
            alt="decoration"
          />
          {isFetchSuccess && (
            <div className="contact__success-message">
              <p>
                Wiadomość została wysłana!
                <br />
                Wkrótce się skontaktujemy.
              </p>
            </div>
          )}
          <div className="contact__form-wrapper">
            <label className="contact__form-content contact__form-content--name">
              Wpisz swoje imię
              <input
                className={classNames("contact__form-input", {
                  "contact__form-input--error": errors.name,
                })}
                {...register("name", {
                  required: "Podane imię jest nieprawidłowe!",
                  pattern: {
                    value: /^[A-Za-z]\S+$/,
                    message: "Podane imię jest nieprawidłowe!",
                  },
                })}
                type="text"
                maxLength={20}
                placeholder="Piotr"
              />
              {errors.name && (
                <p className="contact__form-error-message">
                  {errors.name.message}
                </p>
              )}
            </label>
            <label className="contact__form-content">
              Wpisz swój email
              <input
                className={classNames("contact__form-input", {
                  "contact__form-input--error": errors.name,
                })}
                {...register("email", {
                  required: "Email jest wymagany!",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Podany email jest nieprawidłowy!",
                  },
                })}
                type="text"
                placeholder="abc@xyz.pl"
              />
              {errors.email && (
                <p className="contact__form-error-message">
                  {errors.email.message}
                </p>
              )}
            </label>
          </div>
          <label className="contact__form-content">
            Wpisz swoją wiadomość
            <textarea
              className={classNames(
                "contact__form-input",
                "contact__form-textarea",
                { "contact__form-input--error": errors.name }
              )}
              {...register("message", {
                required: "Wiadomość jest wymagana!",
                minLength: {
                  value: 120,
                  message: "Wiadomość musi mieć co najmniej 120 znaków!",
                },
              })}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            {errors.message && (
              <p className="contact__form-error-message">
                {errors.message.message}
              </p>
            )}
          </label>
          <button className="contact__form-btn" type="submit">
            Wyślij
          </button>
        </form>
      </div>
      <div className="contact__footer">
        <h3 className="contact__footer-title">Copyright by Coders Lab</h3>
        <div className="contact__footer-icons-box">
          <Link to="/">
            <img
              className="contact__footer-icon"
              src={facebook}
              alt="facebook"
            />
          </Link>
          <Link to="/">
            <img
              className="contact__footer-icon"
              src={instagram}
              alt="instagram"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
