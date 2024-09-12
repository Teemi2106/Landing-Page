import React, { useState } from "react";
import "../CSS/header.css";

const Header = () => {
  // State to manage mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <header id="header">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <h1>Landing</h1>
        <button>Buy Now</button>
      </header>

      {/* Mobile Header */}
      <header id="headerMobile">
        <div id="mobileNavBar">
          <h1>Landing</h1>
          <button className="menu-icon" onClick={toggleMenu}>
            {/* Menu icon (hamburger) */}☰
          </button>
        </div>
        {/* Mobile Menu */}
        <nav className={`mobileMenu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={toggleMenu}>Home</li>
            <li onClick={toggleMenu}>About</li>
            <li onClick={toggleMenu}>Contact</li>
          </ul>
          <button>Buy Now</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
