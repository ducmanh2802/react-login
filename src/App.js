import React, { useState } from "react";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CategoryList from "./components/category/CategoryList";
import TopMenu from "./components/topmenu/TopMenu";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import SignUp from "./components/signup/SignUp";

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
    console.log(object);
  };
  return (
    <div className="home">
      <Header />
      <TopMenu object={object} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/home">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login data={data} object={object} changeInput={changeInput} />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/category" exact={true}>
            <CategoryList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
