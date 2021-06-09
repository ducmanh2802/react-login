import React, { Fragment } from "react";
import CategoryList from "./CategoryList";

const CategoryDetail = (props) => {
  return (
    <Fragment>
      <CategoryList />
      <p>Chi tiet category</p>
    </Fragment>
  );
};
export default CategoryDetail;
