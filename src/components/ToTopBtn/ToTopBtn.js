import React, { useEffect, useState } from "react";
import "./toTopBtn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";

export const ToTopBtn = () => {
  const [showToTopBtn, setShowToTopBtn] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTopBtn(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (showToTopBtn) {
    return (
      <div className="to-top-btn">
        <FontAwesomeIcon
          className="to-top-btn__icon"
          icon={faChevronUp}
          onClick={() => animateScroll.scrollToTop()}
        />
      </div>
    );
  } else {
    return null;
  }
};
