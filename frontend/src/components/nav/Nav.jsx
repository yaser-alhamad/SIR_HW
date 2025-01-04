import React from "react";
import { NavLink } from "react-router";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <NavLink className={"link"} to="/">
        Home
      </NavLink>
      <NavLink className={"link"} to="/add">
        AddFaq
      </NavLink>
      <NavLink className={"link"} to="/search">
        Search
      </NavLink>
    </nav>
  );
};

export default Nav;
