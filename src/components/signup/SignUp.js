import React from "react";

export default function SignUp() {
  return (
    <form>
      <label>Name</label>
      <input placeholder="Name"></input>
      <label>Username: </label>
      <input placeholder="Username"></input>
      <label>Password: </label>
      <input placeholder="password"></input>
      <label>Retype Password: </label>
      <input placeholder="password"></input>
      <button>Submit</button>
    </form>
  );
}
