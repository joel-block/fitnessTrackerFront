import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="navbar-container">
      <div className="link-container">
        <div>
          <Link to={"/"} className="nav-item">
            Home
          </Link>
          <Link to={"/somewhereelse"} className="nav-item">
            Somewhere else
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
