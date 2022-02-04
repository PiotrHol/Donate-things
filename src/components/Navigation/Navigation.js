import React, { useState } from "react";
import "./navigation.scss";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import classNames from "classnames";

export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const auth = false;

  return (
    <div className="navigation">
      <div className="navigation__content">
        <input
          type="checkbox"
          className="navigation__btn"
          id="navigation__menu-btn"
          checked={showMenu}
          onChange={() => setShowMenu((prev) => !prev)}
        />
        <label className="navigation__menu-icon" htmlFor="navigation__menu-btn">
          <span className="navigation__nav-icon" />
        </label>
        <nav className="navigation__nav">
          <ul className="navigation__page-nav">
            <li>
              <Scroll
                activeClass="navigation__page-nav-link--active"
                to="start"
                spy={true}
                smooth={true}
                duration={1000}
                className="navigation__page-nav-link"
                onClick={() => showMenu && setShowMenu(false)}
              >
                Start
              </Scroll>
            </li>
            <li>
              <Scroll
                activeClass="navigation__page-nav-link--active"
                to="whats-going-on"
                spy={true}
                smooth={true}
                duration={1000}
                className="navigation__page-nav-link"
                onClick={() => showMenu && setShowMenu(false)}
              >
                O co chodzi?
              </Scroll>
            </li>
            <li>
              <Scroll
                activeClass="navigation__page-nav-link--active"
                to="about-us"
                spy={true}
                smooth={true}
                duration={1000}
                className="navigation__page-nav-link"
                onClick={() => showMenu && setShowMenu(false)}
              >
                O nas
              </Scroll>
            </li>
            <li>
              <Scroll
                activeClass="navigation__page-nav-link--active"
                to="who-we-help"
                spy={true}
                smooth={true}
                duration={1000}
                className="navigation__page-nav-link"
                onClick={() => showMenu && setShowMenu(false)}
              >
                Fundacja i organizacje
              </Scroll>
            </li>
            <li>
              <Scroll
                activeClass="navigation__page-nav-link--active"
                to="contact-and-footer"
                spy={true}
                smooth={true}
                duration={1000}
                className="navigation__page-nav-link"
                onClick={() => showMenu && setShowMenu(false)}
              >
                Kontakt
              </Scroll>
            </li>
          </ul>
          <ul className="navigation__auth-nav">
            {auth && (
              <li className="navigation__auth-nav-element">mail@gmail.com</li>
            )}
            <li>
              <Link
                className={classNames("navigation__auth-nav-link", {
                  "navigation__auth-nav-link--active": auth,
                })}
                to={`/${!auth ? `logowanie` : `oddaj-rzeczy`}`}
              >
                {!auth ? "Zaloguj" : "Oddaj rzeczy"}
              </Link>
            </li>

            <li>
              <Link
                className={classNames("navigation__auth-nav-link", {
                  "navigation__auth-nav-link--active": !auth,
                })}
                to={`/${!auth ? "rejestracja" : "wylogowano"}`}
              >
                {!auth ? "Załóż konto" : "Wyloguj"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
