import { useState, useEffect } from "react";
import styles from "./footer.css";

import FacebookIcon from "../../assets/facebook-icon.png";
import GithubIcon from "../../assets/github-icon.png";
import LinkedinIcon from "../../assets/linkedin-icon.png";

function Footer() {
  const [footer, setFooter] = useState([]);

  return (
    <footer className="footer-container">
      <form action="./" className="form-content">
        <fieldset className="form-fluid">
          <legend>Contact me</legend>
          <div className="col">
            <div className="inputBox">
              <label htmlFor="first-name">FIRST NAME</label>
              <input type="text" id="first-name" required="required" />
              <span className="line"></span>
            </div>
          </div>

          <div className="col">
            <div className="inputBox">
              <label htmlFor="second-name">LAST NAME</label>
              <input type="text" id="second-name" required="required" />
              <span className="line"></span>
            </div>
          </div>

          <div className="col">
            <div className="inputBox">
              <label htmlFor="email">E-MAIL</label>
              <input type="email" id="email" required="required" />
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox textArea">
              <label for="message">MESSAGE</label>
              <textarea
                name="message"
                className="messageField"
                id="message"
                cols="30"
                rows="6"
                required="required"
              ></textarea>
              <span className="line"></span>
            </div>
          </div>

          <div>
            <button>Send</button>
          </div>
        </fieldset>
      </form>

      <div className="address">
        <h3>Endereço</h3>
        <p>
          Centro de Informática/Center of Informatics Universidade Federal de
          Pernambuco/Federal University of Pernambuco Departamento de
          Informações e Sistemas/Information and Systems Department Av.
          Professor Luís Freire, s/n - CDU - 50740-540, Recife, PE, Brazil FAX:
          +55 81 2126.8438 PHONE: +55 81 2126-8430 EXT. 4008
        </p>
      </div>

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
          Built with &lt; / &gt; and <span>❤</span> by Aslay
        </p>
      </div>
    </footer>
  );
}

export default Footer;
