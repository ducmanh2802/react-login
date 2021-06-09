import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const adminUsername = "manhdd";
  const changeInputUsername = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
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
  const buttonStyle = {
    height: "50px",
    background: "#f4f4f4",
  };

  return (
    <form style={formStyle}>
      <h2> Please sign in </h2>
      <label>Username:</label>
      <input
        type="username"
        id="inputUsername"
        placeholder="Username"
        required
        autofocus
        onChange="changeInputUsername"
        style={inputStyle}
      />
      <br />
      <label> Password:</label>
      <input
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        required
        onChange="changeInputPasword"
        style={inputStyle}
      />
      <br />
      <button style={buttonStyle}>Sign in </button>
    </form>
  );
};
export default Login;
