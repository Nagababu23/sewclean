import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="logo">
          CleanPro
        </NavLink>
        <div className="menu">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            Contact
          </NavLink>
        </div>
        <button className="menu-toggle" id="menu-toggle">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
