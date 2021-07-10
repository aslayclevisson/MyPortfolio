import { useState, useEffect } from "react";
import styles from "./navBar.css";

function NavBar() {
  const [NavBar, setNavBar] = useState([]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <a href="#" className="navbar-name">
            LOGO/NAME
          </a>
        </div>
        <div className="Menu">
          <ul className="navigation-page">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>

          <button>Get In Touch</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
