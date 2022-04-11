import React from "react";
import { registerUser } from "../api";

const Register = ({
  username,
  setUsername,
  password,
  setPassword,
  isLoggedIn,
  setIsLoggedIn,
  setToken,
}) => {
  return (
    <div className="registration-page">
      <h2>Welcome to FitnessTrac.kr</h2>
      <div className="form-container">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await registerUser(username, password);
              setToken(response.token);
              setIsLoggedIn(true);
              setUsername("");
              setPassword("");
            } catch (error) {
              console.error(
                "There was a problem with your registration.",
                error
              );
            }
          }}
        >
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Register</button>
        </form>
        <span className="registration-confirm">
          {isLoggedIn ? <p>You've successfully registered!</p> : null}
        </span>
      </div>
    </div>
  );
};

export default Register;
