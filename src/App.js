import React, { useState } from "react";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CategoryList from "./components/category/CategoryList";
import CategoryDetail from "./components/category/CategoryDetail";
import TopMenu from "./components/topmenu/TopMenu";
import Header from "./components/header/Header";
import Content from "./components/content/Content";

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
    <div className="home">
      <TopMenu />
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route path="/login">
            <Login data={data} object={object} changeInput={changeInput} />
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
    </div>
  );
};

export default App;
