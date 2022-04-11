import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="navbar-container">
      <div className="link-container">
        <div>
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
                onClick={() => {
                  setIsLoggedIn(false);
                }}
                to={"/"}
              >
                Logout
              </Link>
            ) : (
              <>
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
