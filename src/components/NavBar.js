import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  textAlign: "center",
  width: "50px",
  padding: "12px",
  margin: "0px 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink exact to="/" style={linkStyles}>
        Home
      </NavLink>
      <NavLink exact to="/movies" style={linkStyles}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={linkStyles}>
        Directors
      </NavLink>
      <NavLink to="/actors" style={linkStyles}>
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
