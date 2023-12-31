import React from "react";
import { useSelector } from "react-redux";
import categorySlice from "../../store/slices/categorySlice/categorySlice";
import "./_cat-nav.scss";
const CatNav = () => {
  const categories = useSelector(categorySlice.getInitialState);
  return (
    <div className="cat-nav-container container">
      <ul>
        {categories.map((category) => {
          return (
            <li className="list-items">
              {" "}
              <a href="#">{category}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CatNav;
