import React from "react";
import "./threeColumns.scss";

export const ThreeColumns = () => {
  return (
    <div className="three-columns">
      <div className="three-columns__column">
        <h2 className="three-columns__head">10</h2>
        <h3 className="three-columns__title">Oddanych worków</h3>
        <p className="three-columns__description">
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className="three-columns__column">
        <h2 className="three-columns__head">5</h2>
        <h3 className="three-columns__title">Wspartych organizacji</h3>
        <p className="three-columns__description">
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className="three-columns__column">
        <h2 className="three-columns__head">7</h2>
        <h3 className="three-columns__title">Zorganizowanych zbiórek</h3>
        <p className="three-columns__description">
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
    </div>
  );
};
