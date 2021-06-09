import React, { Fragment } from "react";
import "./CategoryItem.css";

const CategoryItem = (props) => {
  return (
    <Fragment>
      <li>
        <a href="/category/:id">
          <p>{props.value}</p>
        </a>
      </li>
    </Fragment>
  );
};
export default CategoryItem;
