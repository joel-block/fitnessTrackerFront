import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NavBar, Register } from "./index";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  return (
    <div className="main-container">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <h1 className="main-title">Hello Main</h1>
      <Switch>
        <Route exact path={"/"}>
          {/* component to render */}
        </Route>
        <Route path={"/routines"}>{/* component to render */}</Route>
        <Route path={"/myroutines"}>{/* component to render */}</Route>
        <Route path={"/activities"}>{/* component to render */}</Route>
        <Route path={"/login"}>{/* component to render */}</Route>
        <Route path={"/register"}>
          <Register
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setToken={setToken}
            token={token}
          />
        </Route>
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
};

export default Main;
