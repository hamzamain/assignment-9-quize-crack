import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h2>QUIZ TIME</h2>
      </div>
      <div>
        <NavLink
          to={"/"}
          className={(isActive) => (isActive ? "active" : undefined)}
        >
          Topics
        </NavLink>
        <NavLink to={"/statistics"}>Statistics</NavLink>
        <NavLink to={"blogs"}>Blogs</NavLink>
      </div>
    </div>
  );
};

export default Header;
