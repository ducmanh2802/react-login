import { useHistory } from "react-router-dom";
import React, { Fragment } from "react";
import CategoryList from "../category/CategoryList";

const Home = ({ object }) => {
  let history = useHistory();

  const goDashboard = () => {
    history.push("/dashboard");
  };
  return (
    <Fragment>
      <div>
        <p>Home</p>
        <p>Xin chao {object.username}</p>
        <button onClick={goDashboard}>Dashboard</button>
        <CategoryList />
      </div>
    </Fragment>
  );
};
export default Home;
