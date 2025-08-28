import React from "react";
import { Link } from "react-router";
import LogoutButton from "../LogoutButton/LogoutButton";

const NavBar = (props) => {
  return (
    <>
      {props.token ? (
        <>
        <div className="Nav">
          <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/flights">Flights</Link>
          <Link to="/bookedFlights">Booked Flights</Link>
          <Link to="/profile">My profile</Link>
          </div>
          <div className="logoutbtn">
            {props.token ? <LogoutButton onLogout={props.onLogout} /> : null}
          </div>
       </div>
        </>
      ) : (
        <>
        <div className="Nav2">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
