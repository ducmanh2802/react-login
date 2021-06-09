import React, { useState } from "react";

const Login = () => {
  const [object, setObject] = useState({ username: "", password: "" });
  const data = {
    user: {
      username: "anhmanh",
      password: "1234",
    },
  };
  const changeInput = (event) => {
    const { name, value } = event.target;
    setObject({ [name]: value });
    console.log(event.target.value);
  };
  const signIn = () => {
    if(object.username.equals(data.user.username) && object.password.equals(data.user.password)){
      alert("login success")
    }else{
        if(!object.username.equals(data.user.username){
      alert("Wrong username")
      if(!object.password.equals(data.user.password)){
      alert("wrong password")
    }
    }
    }
  }
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
        name="inputUsername"
        placeholder="Username"
        required
        autofocus
        onChange={changeInput}
        style={inputStyle}
      />
      <br />
      <label> Password:</label>
      <input
        type="password"
        name="inputPassword"
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
