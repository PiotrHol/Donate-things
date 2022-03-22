import React from "react";
import "../FormContent/formContent.scss";
import "./summary.scss";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions/formActions";
import { useSelector } from "react-redux";
import shirtIcon from "../../assets/Icon-1.svg";
import circleArrows from "../../assets/Icon-4.svg";

export const Summary = () => {
  const dispatch = useDispatch();
  const howManyBags = useSelector((state) => state.form.bags);
  const whichThings = useSelector((state) => state.form.things);
  const forWho = useSelector((state) => state.form.whoIsAssistance);
  const location = useSelector((state) =>
    state.form.organization ? state.form.organization : state.form.location
  );
  const textForBags =
    howManyBags !== 1 ? (howManyBags > 4 ? "worków" : "worki") : "worek";
  const address = useSelector((state) => state.form.pickUpAddress);
  const date = useSelector((state) => state.form.pickUpDate);

  return (
    <div className="form-content">
      <div className="form-content__main summary__main">
        <form className="form-content__form summary__form">
          <h2 className="form-content__form-title summary__main-title">
            Podsumowanie Twojej darowizny
          </h2>
          <div className="summary">
            <div className="summary__give">
              <h3 className="summary__title">Oddajesz:</h3>
              <div className="summary__give-wrapper">
                <img
                  className="summary__give-icon"
                  src={shirtIcon}
                  alt="shirtIcon"
                />
                <p className="summary__give-text">
                  {howManyBags} {textForBags}, {whichThings}
                  {forWho.map((who) => who && `, ${who}`)}
                </p>
              </div>
              <div className="summary__give-wrapper">
                <img
                  className="summary__give-icon"
                  src={circleArrows}
                  alt="circleArrows"
                />
                <p className="summary__give-text">
                  dla lokalizacji: {location}
                </p>
              </div>
            </div>
            <div className="summary__details">
              <div className="summary__details-box">
                <h3 className="summary__title">Adres odbioru:</h3>
                <div className="summary__details-wrapper">
                  <p className="summary__details-description">Ulica:</p>
                  <p className="summary__details-data">{address.street}</p>
                </div>
                <div className="summary__details-wrapper">
                  <p className="summary__details-description">Miasto:</p>
                  <p className="summary__details-data">{address.city}</p>
                </div>
                <div className="summary__details-wrapper">
                  <p className="summary__details-description">
                    Kod
                    <br />
                    pocztowy:
                  </p>
                  <p className="summary__details-data">{address.postCode}</p>
                </div>
                <div className="summary__details-wrapper">
                  <p className="summary__details-description">
                    Numer
                    <br />
                    telefonu:
                  </p>
                  <p className="summary__details-data">
                    {address.phone.slice(0, 3)} {address.phone.slice(3, 6)}{" "}
                    {address.phone.slice(6, 9)}
                  </p>
                </div>
              </div>
              <div className="summary__details-box">
                <h3 className="summary__title">Termin odbioru:</h3>
                <div className="summary__details-wrapper">
                  <p className="summary__details-description">Data:</p>
                  <p className="summary__details-data">
                    {date.date.slice(8, 10)}.{date.date.slice(5, 7)}.
                    {date.date.slice(0, 4)}
                  </p>
                </div>
                <div className="summary__details-wrapper">
                  <p className="summary__details-description">Godzina:</p>
                  <p className="summary__details-data">{date.time}</p>
                </div>
                <div className="summary__details-wrapper">
                  <p className="summary__details-description">
                    Uwagi
                    <br />
                    dla kuriera:
                  </p>
                  <p className="summary__details-data">{date.note}</p>
                </div>
              </div>
            </div>
            <div className="form-content__form-btn-wrapper summary__btn-wrapper">
              <button
                className="form-content__form-btn summary__btn"
                type="button"
                onClick={() => dispatch(changePage(4))}
              >
                Wstecz
              </button>
              <button
                className="form-content__form-btn summary__btn summary__btn-check"
                type="submit"
              >
                Potwierdzam
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
