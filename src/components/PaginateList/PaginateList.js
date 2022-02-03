import React from "react";
import "./paginateList.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPage } from "../../actions/paginateActions";
import classNames from "classnames";

export const PaginateList = ({ description, list }) => {
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedList = list.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  const dispatch = useDispatch();

  for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginate-list">
      <p className="paginate-list__description">{description}</p>
      <ul className="paginate-list__list">
        {paginatedList.map((item) => (
          <li key={item.id} className="paginate-list__list-item">
            <div className="paginate-list__list-left-content">
              <h3 className="paginate-list__list-name">
                Fundacja "{item.name}"
              </h3>
              <p className="paginate-list__list-purpose">
                Cel i misja: {item.purpose}
              </p>
            </div>
            <p className="paginate-list__list-description">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
      {pageNumbers.length > 1 && (
        <ul className="paginate-list__pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={classNames("paginate-list__pagination-item", {
                "paginate-list__pagination-item--active":
                  currentPage === number,
              })}
              onClick={() => dispatch(setPage(number))}
            >
              {number}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
