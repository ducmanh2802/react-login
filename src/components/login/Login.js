import React from "react";
import { useHistory } from "react-router-dom";

const Login = ({ data, object, changeInput }) => {
  let history = useHistory();
  const signIn = () => {
    if (
      object.username === data.user.username &&
      object.password === data.user.password
    ) {
      // alert("login success");
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

  return (
    <div class="form-group">
      <label for="">Username: </label>
      <input
        type="username"
        class="form-control"
        name="username"
        id="username"
        placeholder="Username"
        onChange={changeInput}
      />
      <label>Password: </label>
      <input
        type="password"
        class="form-control"
        name="password"
        id="password"
        onChange={changeInput}
        placeholder="password"
      />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};
export default Login;
