import { useState, useEffect } from "react";
import styles from "./footer.css";

import FacebookIcon from "../../assets/facebook-icon.png";
import GithubIcon from "../../assets/github-icon.png";
import LinkedinIcon from "../../assets/linkedin-icon.png";

function Footer() {
  const [footer, setFooter] = useState([]);

  return (
    <footer className="footer-container">
      <div className="Social-Content icons">
        <a href="https://www.facebook.com/">
          <img src={FacebookIcon} alt="" />
          <span>Facebook</span>
        </a>

        <a href="https://github.com/aslayclevisson">
          <img src={GithubIcon} alt="" />
          <span>GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/aslayclevisson/">
          <img src={LinkedinIcon} alt="" />
          <span>LinkedIn</span>
        </a>
      </div>

      <div>
        <p className="Made-With-Text">
          Made with &lt; / &gt; and <span>❤</span> by Aslay
        </p>
      </div>

      <div className="Adress">
        <h3>Endereço</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          eqeqeqweqweqweqweeeeeee eeeeeeeeeeeeeeeeeeee
        </p>
      </div>
    </footer>
  );
}

export default Footer;
