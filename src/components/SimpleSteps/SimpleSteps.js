import React from "react";
import "./simpleSteps.scss";
import decoration from "../../assets/Decoration.svg"
import { Link } from "react-router-dom";
import shirt from "../../assets/Icon-1.svg"
import bag from "../../assets/Icon-2.svg";
import glass from "../../assets/Icon-3.svg";
import arrows from "../../assets/Icon-4.svg";

export const SimpleSteps = () => {
    return (
        <div className="simple-steps">
            <h2 className="simple-steps__head">Wystarczą 4 proste kroki</h2>
            <img className="simple-steps__decoration" src={decoration} alt="decoration"/>
            <div className="simple-steps__steps">
                <div className="simple-steps__wrapper">
                    <div className="simple-steps__column">
                        <img className="simple-steps__icon" src={shirt} alt="shirt"/>
                        <h3 className="simple-steps__icon-title">Wybierz rzeczy</h3>
                        <p className="simple-steps__description">ubrania, zabawki,<br/>sprzęt i inne</p>
                    </div>
                    <div className="simple-steps__column">
                        <img className="simple-steps__icon" src={bag} alt="bag"/>
                        <h3 className="simple-steps__icon-title">Spakuj je</h3>
                        <p className="simple-steps__description">skorzystaj z<br/>worków na śmieci</p>
                    </div>
                    <div className="simple-steps__column">
                        <img className="simple-steps__icon" src={glass} alt="glass"/>
                        <h3 className="simple-steps__icon-title">Zdecyduj komu<br/>chcesz pomóc</h3>
                        <p className="simple-steps__description">wybierz zaufane<br/>miejsce</p>
                    </div>
                    <div className="simple-steps__column">
                        <img className="simple-steps__icon" src={arrows} alt="arrows"/>
                        <h3 className="simple-steps__icon-title">Zamów kuriera</h3>
                        <p className="simple-steps__description">kurier przyjedzie<br/>w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <Link className="simple-steps__link" to="/oddaj-rzeczy">Oddaj<br/>rzeczy</Link>
        </div>
    );
}