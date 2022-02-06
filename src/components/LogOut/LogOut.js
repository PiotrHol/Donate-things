import React from "react";
import "./logOut.scss";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import decoration from "../../assets/Decoration.svg";

export const LogOut = () => {
    return (
        <div className="log-out">
            <Navigation inHomePage={false} />
            <div className="log-out__content">
                <h1 className="log-out__title">Wylogowanie nastąpiło<br/>pomyślnie!</h1>
                <img className="log-out__decoration" src={decoration} alt="decoration" />
                <Link className="log-out__btn" to="/">Strona główna</Link>
            </div>
        </div>
    );
}