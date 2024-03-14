import React from "react";

const Header = () => {
  // Define toggleMenu function here
  const toggleMenu = () => {
    // Implement your toggleMenu logic here
    console.log("Menu toggled");
  };

  return (
    <header>
      <img
        src="./src/assets/images/taohid.png"
        width="50px"
        height="50px"
        style={{ marginLeft: "0px" }}
        alt=""
      />
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <nav className="menu">
        <ul className="nav_links">
          <li>
            <a href="#" className="nav_link" data-section="aboutme">
              About
            </a>
          </li>
          <li>
            <a
              title="Not working yet"
              href="#"
              className="nav_link"
              data-section="experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              title="Not working yet"
              href="#"
              className="nav_link"
              data-section="project"
            >
              Project
            </a>
          </li>
          <li>
            <a href="#" className="nav_link" data-section="contact">
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
