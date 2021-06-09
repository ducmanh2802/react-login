import React, { Fragment } from "react";
import CategoryItem from "../category/CategoryItem";

const CategoryList = () => {
  const items = [
    { id: 1, name: "mobile", code: "mb", description: "mfdsfad" },
    { id: 2, name: "clothes", code: "cl", description: "sdaf" },
    { id: 3, name: "food", code: "fd", description: "fsdf" },
    { id: 4, name: "laptop", code: "lt", description: "fsda" },
  ];
  console.log(items);
  return (
    <Fragment>
      <p>Category List:</p>
      <ul>
        {items.map((item) => {
          return <CategoryItem value={item.name} key={item.code} />;
        })}
      </ul>
    </Fragment>
  );
};
export default CategoryList;
