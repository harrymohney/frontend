import React from "react";
import { Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = () => {
  return (
    <nav className="MainNav">
      <Link to="/">
        <img src="brandImageURL" alt="Brand Logo" />
      </Link>
      <div>Our E-Commerce Store</div>
    </nav>
  );
};

export default MainNav;