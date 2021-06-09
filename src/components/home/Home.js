import { useHistory } from "react-router-dom";
import React, { Fragment } from "react";

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
      </div>
    </Fragment>
  );
};
export default Home;
