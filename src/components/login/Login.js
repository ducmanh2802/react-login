import React from "react";
import { useHistory } from "react-router-dom";

const Login = ({ data, object, changeInput }) => {
  let history = useHistory();

  const signIn = () => {
    console.log(object);
    console.log(data);
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
        name=""
        id=""
        // aria-describedby="helpId"
        placeholder="Username"
        onChange={changeInput}
      />
      <label>Password: </label>
      <input
        type="password"
        class="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        onChange={changeInput}
        placeholder="password"
      />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};
export default Login;
