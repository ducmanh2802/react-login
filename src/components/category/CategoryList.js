import React, { Fragment, useState } from "react";
import CategoryItem from "../category/CategoryItem";
import CategoryDetail from "./CategoryDetail";

const CategoryList = () => {
  const items = [
    { id: 1, name: "mobile", code: "mb", description: "mfdsfad" },
    { id: 2, name: "clothes", code: "cl", description: "sdaf" },
    { id: 3, name: "food", code: "fd", description: "fsdf" },
    { id: 4, name: "laptop", code: "lt", description: "fsda" },
  ];
  const [category, setCategory] = useState({
    id: "",
    name: "",
    code: "",
    description: "",
  });
  const handleClick = (e) => {
    // alert(e);
    setCategory(
      ...category,
      items[e - 1].id,
      items[e - 1].name,
      items[e - 1].code,
      items[e - 1].description
    );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <p>Category List:</p>
          <ul>
            {items.map((item) => {
              return (
                <div>
                  <CategoryItem
                    name={item.name}
                    id={item.id}
                    handleClick={handleClick}
                  />
                  <CategoryDetail category={category} />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CategoryList;
