import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext.js";
function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setuser } = useContext(UserContext);

  const handSubmite = (e) => {
    e.preventDefault();
    setuser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="username"
      />
      {"   "}
      <input
        type="text"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handSubmite}>Submit</button>
    </div>
  );
}

export default Login;
