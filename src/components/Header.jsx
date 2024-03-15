import React, { useState } from "react";
import logoimage from '../assets/images/taohid.png'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); 
    }
  };

  return (
    <header>
      <img
        src={logoimage}
        width="50px"
        height="50px"
        style={{ marginLeft: "0px" }}
        alt=""
      />
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav_links">
          <li>
            <a
              href="#"
              className="nav_link"
              onClick={() => handleMenuItemClick("aboutme")}
            >
              About
            </a>
          </li>
          <li>
  <a
    title="Not working yet"
    href="#"
    className="nav_link"
    onClick={() => handleMenuItemClick("experience")}
  >
    Experience
  </a>
</li>
<li>
  <a
    title="Not working yet"
    href="#"
    className="nav_link"
    onClick={() => handleMenuItemClick("project")}
  >
    Project
  </a>
</li>
          <li>
            <a
              href="#"
              className="nav_link"
              onClick={() => handleMenuItemClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <a className="bt" href="#a">
        <button>Resume</button>
        <button>Hire Me</button>
      </a>
    </header>
  );
};

export default Header;