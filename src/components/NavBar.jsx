import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="navbar-container">
      <div className="link-container">
        <Link to={"/"} className="nav-item">
          Home
        </Link>
        <Link to={"/routines"} className="nav-item">
          Routines
        </Link>
        <>{isLoggedIn ? <Link to={"/myroutines"}>My Routines</Link> : null}</>
        <Link to={"/activities"} className="nav-item">
          Activities
        </Link>
        <>
          {isLoggedIn ? (
            <Link
              className="nav-item"
              onClick={() => {
                setIsLoggedIn(false);
              }}
              to={"/"}
            >
              Logout
            </Link>
          ) : (
            <>
              <Link to={"/login"} className="nav-item">
                Login
              </Link>
              <Link to={"/register"} className="nav-item">
                Register
              </Link>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default NavBar;
