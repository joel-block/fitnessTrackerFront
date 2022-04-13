import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { NavBar, Register, Login, Routines, MyRoutines, Home } from "./index";
import { getUser } from "../api";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const checkUser = async () => {
      try {
        const localStorageToken = localStorage.getItem("token");
        if (localStorageToken) {
          setToken(localStorageToken);
          setIsLoggedIn(true);
          const response = await getUser(localStorageToken);
          setUser(response);
        }
      } catch (error) {
        throw error;
      }
    };

    checkUser();
  }, []);

  return (
    <div className="main-container">
      <header>
        <h1 className="main-title">Fitness Trac.kr</h1>
        {user.username ? <small>Logged in as: {user.username}</small> : null}
        <NavBar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setToken={setToken}
          setUser={setUser}
        />
      </header>

      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/routines"}>
          <Routines />
        </Route>
        <Route path={"/myroutines"}>
          <MyRoutines isLoggedIn={isLoggedIn} token={token} user={user} />
        </Route>
        <Route path={"/activities"}>{/* component to render */}</Route>
        <Route path={"/login"}>
          <Login
            setUser={setUser}
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
            setUser={setUser}
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
