import React, { useState } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CategoryList from "./components/category/CategoryList";
import CategoryDetail from "./components/category/CategoryDetail";

const App = () => {
  const [object, setObject] = useState({ username: "", password: "" });
  const data = {
    user: {
      username: "anhmanh",
      password: "1234",
    },
  };
  const changeInput = (event) => {
    const { name, value } = event.target;
    setObject({ ...object, [name]: value });
  };
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login data={data} object={object} changeInput={changeInput} />
        </Route>
        <Route path="/home">
          <Home object={object} />
        </Route>
        <Route path="/dashboard">
          <Dashboard object={object} />
        </Route>
        <Route path="/category" exact={true}>
          <CategoryList />
        </Route>
        <Route path="/category/:id" exact={true}>
          <CategoryDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
