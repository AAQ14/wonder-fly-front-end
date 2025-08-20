import React from "react";
import { Link } from "react-router";

const NavBar = (props) => {
  return (
    <>
      {props.token ? (
        <>
        <div className="Nav">
          <Link to="/">Home</Link>
          <Link to="/flights">Flights</Link>
          <Link to="/profile">My profile</Link>
       </div>
        </>
      ) : (
        <>
        <div className="Nav2">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
