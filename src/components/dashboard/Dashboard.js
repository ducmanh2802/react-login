import React, { Fragment } from "react";
const Dashboard = ({ object }) => {
  return (
    <Fragment>
      <p>Dashboard</p>
      <p>Xin chao {object.username}</p>
    </Fragment>
  );
};
export default Dashboard;
