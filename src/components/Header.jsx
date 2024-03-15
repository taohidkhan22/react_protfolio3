import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logoimage from '../assets/images/taohid.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuItemClick = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
          window.scrollTo({
              behavior: "smooth",
              top: section.offsetTop
          });
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
            <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <i className="fas fa-bars"></i>
            </div>
            <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
                <ul className="nav_links">
                    <li>
                        <Link to="/about" className="nav_link" onClick={() => handleMenuItemClick("aboutme")}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience" className="nav_link" onClick={() => handleMenuItemClick("experience")}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="/project" className="nav_link" onClick={() => handleMenuItemClick("project")}>
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav_link" onClick={() => handleMenuItemClick("contact")}>
                            Contact
                        </Link>
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
