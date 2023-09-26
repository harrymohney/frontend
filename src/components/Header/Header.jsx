import React from "react";
import MainNav from "../MainNav/MainNav";
import "./Header.css";

const Header = ({ heroImage }) => {
  return (
    <header>
      <MainNav />
      <img src={heroImage} alt="Hero" />
    </header>
  );
};

export default Header;
