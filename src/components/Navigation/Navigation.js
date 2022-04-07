import React, { useState } from "react";
import "./navigation.scss";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";

export const Navigation = ({ inHomePage }) => {
  const [showMenu, setShowMenu] = useState(false);
  const auth = useSelector((state) => state.auth.id);

  const signOutBtn = async () => {
    await signOut(getAuth());
  };

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
              {inHomePage ? (
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
              ) : (
                <Link className="navigation__page-nav-link" to="/">
                  Start
                </Link>
              )}
            </li>
            <li>
              {inHomePage ? (
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
              ) : (
                <Link
                  className="navigation__page-nav-link"
                  to="/"
                  onClick={() =>
                    sessionStorage.setItem("scrollTarget", "whats-going-on")
                  }
                >
                  O co chodzi?
                </Link>
              )}
            </li>
            <li>
              {inHomePage ? (
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
              ) : (
                <Link
                  className="navigation__page-nav-link"
                  to="/"
                  onClick={() =>
                    sessionStorage.setItem("scrollTarget", "about-us")
                  }
                >
                  O nas
                </Link>
              )}
            </li>
            <li>
              {inHomePage ? (
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
              ) : (
                <Link
                  className="navigation__page-nav-link"
                  to="/"
                  onClick={() =>
                    sessionStorage.setItem("scrollTarget", "who-we-help")
                  }
                >
                  Fundacja i organizacje
                </Link>
              )}
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
              <li className="navigation__auth-nav-element">{`Cześć ${auth}`}</li>
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
                onClick={auth && signOutBtn}
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
