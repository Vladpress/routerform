import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <nav className="header__nav">
        {/* Navigatin from browser router */}
        <Link className="header__button" to="/">
          Greeting
        </Link>
        <Link className="header__button" to="choose">
          Operations
        </Link>
        <Link className="header__button" to="/form">
          Form
        </Link>
      </nav>
    </div>
  );
};

export default Header;
