import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from "./index";

const Main = () => {
  return (
    <div className="main-container">
      <NavBar />
      <h1 className="main-title">Hello Main</h1>
      <Switch>
        <Route path={"/"}>
          {/* component to render */}
        </Route>
        <Route path={"/somewhereelse"}>
          {/* component to render */}
        </Route>
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
};

export default Main;
