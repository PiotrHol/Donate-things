import React from "react";
import "./homeHeader.scss";
import { Navigation } from "../Navigation/Navigation";
import decoration from "../../assets/Decoration.svg"
import { Link } from "react-router-dom";

export const HomeHeader = () => {
    return (
        <div className="home-header">
            <Navigation />
            <div className="home-header__content">
                <h2 className="home-header__text">Zacznij pomagać!</h2>
                <h2 className="home-header__text">Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={decoration} className="home-header__img" alt="decoration" />
                <div className="home-header__buttons">
                    <Link className="home-header__btn" to="/oddaj-rzeczy">Oddaj<br/>rzeczy</Link>
                    <Link className="home-header__btn" to="/">Zorganizuj<br/>zbiórkę</Link>
                </div>
            </div>
        </div>
    );
}