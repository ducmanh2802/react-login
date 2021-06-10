import React, { Fragment } from "react";
import "./CategoryItem.css";

const CategoryItem = (props) => {
  return (
    <Fragment>
      <li>
        <button onClick={(e) => props.handleClick(props.id)}>
          <p>{props.name}</p>
        </button>
      </li>
    </Fragment>
  );
};
export default CategoryItem;
