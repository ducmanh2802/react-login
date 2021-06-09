import React from "react";
import { useHistory } from "react-router-dom";

const Login = ({ data, object, changeInput }) => {
  let history = useHistory();

  const signIn = () => {
    // console.log(object.username);
    // console.log(object.password);
    if (
      object.username === data.user.username &&
      object.password === data.user.password
    ) {
      alert("login success");
      history.push("/home");
    } else {
      if (object.username !== data.user.username) {
        alert("Wrong username");
        if (object.password !== data.user.password) {
          alert("wrong password");
        }
      }
    }
  };
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    width: "800px",
    height: "200px",
    margin: "0 auto",
  };
  const inputStyle = {
    flex: "10",
    height: "50px",
  };

  return (
    <form style={formStyle}>
      <h2> Please sign in </h2>
      <label>Username:</label>
      <input
        type="username"
        name="username"
        placeholder="Username"
        required
        onChange={changeInput}
        style={inputStyle}
      />
      <br />
      <label> Password:</label>
      <input
        type="password"
        name="password"
        className="form-control"
        placeholder="Password"
        required
        onChange={changeInput}
        style={inputStyle}
      />
      <br />
      <button onClick={signIn}>Sign in </button>
    </form>
  );
};
export default Login;
