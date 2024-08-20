import React from "react";
import { useState } from "react";

import logo from "../asset/logo.png";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <ul className={` ${isMenuOpen ? "nav-link active" : "nav-links"}`}>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">SERVICES</a>
            </li>
            <li>
              <a href="/">RESOURCES</a>
            </li>
            <li>
              <a href="/">REVIEWS</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
          <div className="navbar-button">
            <a href="/" className="free-consultation">
              Free Consultation
            </a>
          </div>
          <div className="icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
