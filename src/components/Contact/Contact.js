import React from "react";
import "./contact.scss";
import decoration from "../../assets/Decoration.svg";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";

export const Contact = () => {
  return (
    <div name="contact-and-footer" className="contact">
      <div className="contact__content">
        <form className="contact__form">
        <h2 className="contact__title">Skontaktuj się z nami</h2>
        <img
          className="contact__decoration"
          src={decoration}
          alt="decoration"
        />
          <div className="contact__form-wrapper">
            <label className="contact__form-content contact__form-content--name">
              Wpisz swoje imię
              <input
                className="contact__form-input"
                type="text"
                placeholder="Piotr"
              />
            </label>
            <label className="contact__form-content">
              Wpisz swój email
              <input
                className="contact__form-input"
                type="email"
                placeholder="abc@xyz.pl"
              />
            </label>
          </div>
          <label className="contact__form-content">
            Wpisz swoją wiadomość
            <textarea
              className="contact__form-input contact__form-textarea"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </label>
          <button className="contact__form-btn">Wyślij</button>
        </form>
      </div>
      <div className="contact__footer">
        <h3 className="contact__footer-title">Copyright by Coders Lab</h3>
        <div className="contact__footer-icons-box">
          <a href="/">
            <img
              className="contact__footer-icon"
              src={facebook}
              alt="facebook"
            />
          </a>
          <a href="/">
            <img
              className="contact__footer-icon"
              src={instagram}
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
