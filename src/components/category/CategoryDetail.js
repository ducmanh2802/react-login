import React, { Fragment } from "react";
import CategoryList from "./CategoryList";

const CategoryDetail = (props) => {
  return (
    <Fragment>
      <CategoryList />
      <div className="col-lg-9">
        <p>Chi tiet categoy:</p>
        <p>{props.category.id}</p>
        <p>{props.category.name}</p>
        <p>{props.category.code}</p>
        <p>{props.category.description}</p>
      </div>
    </Fragment>
  );
};
export default CategoryDetail;
