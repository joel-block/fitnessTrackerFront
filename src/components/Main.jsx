import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NavBar, Register, Login, Routines, MyRoutines } from "./index";
import woman from "../images/woman.webp";
const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  return (
    <div className="main-container">
      <header>
        <h1 className="main-title">Fitness Trac.kr</h1>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <img id="woman" src={woman} alt="woman exercising" />
      <Switch>
        <Route exact path={"/"}>
          {/* component to render */}
        </Route>
        <Route path={"/routines"}>
          <Routines />
        </Route>
        <Route path={"/myroutines"}>
          <MyRoutines isLoggedIn={isLoggedIn} token={token} />
        </Route>
        <Route path={"/activities"}>{/* component to render */}</Route>
        <Route path={"/login"}>
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setToken={setToken}
          />
        </Route>
        <Route path={"/register"}>
          <Register
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setToken={setToken}
          />
        </Route>
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
};

export default Main;
