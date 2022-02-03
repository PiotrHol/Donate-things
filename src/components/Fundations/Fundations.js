import React from "react";
import "./fundations.scss";
import decoration from "../../assets/Decoration.svg";
import { PaginateList } from "../PaginateList/PaginateList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import {
  setOrganizations,
  setFundations,
  setCollections,
} from "../../actions/paginateActions";

export const Fundations = () => {
  const list = useSelector((state) => state.pagination.currentList);
  const description = useSelector(
    (state) => state.pagination.currentDescription
  );
  const currentNavElement = useSelector(
    (state) => state.pagination.currentNavElement
  );
  const dispatch = useDispatch();
  return (
    <div name="who-we-help" className="fundations">
      <h2 className="fundations__title">Komu pomagamy?</h2>
      <img
        className="fundations__decoration"
        src={decoration}
        alt="decoration"
      />
      <ul className="fundations__set-list">
        <li
          className={classNames(
            "fundations__set-list-item",
            "fundations__set-list-item--first",
            {
              "fundations__set-list-item--active":
                currentNavElement === "fundations",
            }
          )}
          onClick={() => dispatch(setFundations())}
        >
          Fundacjom
        </li>
        <li
          className={classNames("fundations__set-list-item", {
            "fundations__set-list-item--active":
              currentNavElement === "organizations",
          })}
          onClick={() => dispatch(setOrganizations())}
        >
          Organizacjom
          <br />
          pozarządowym
        </li>
        <li
          className={classNames("fundations__set-list-item", {
            "fundations__set-list-item--active":
              currentNavElement === "collections",
          })}
          onClick={() => dispatch(setCollections())}
        >
          Lokalnym
          <br />
          zbiórkom
        </li>
      </ul>
      {list ? (
        <PaginateList description={description} list={list} />
      ) : (
        <div className="fundations__loading">Loading...</div>
      )}
    </div>
  );
};
