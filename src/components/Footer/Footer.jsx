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
          <div>
            <label htmlFor="first-name">NOME</label>
            <input type="text" id="first-name" placeholder="Nome" />
          </div>

          <div>
            <label htmlFor="second-name">SOBRENOME</label>
            <input type="text" id="second-name" placeholder="Sobrenome" />
          </div>

          <div>
            <label htmlFor="first-name">E-MAIL</label>
            <input
              type="email"
              id="first-name"
              placeholder="Seu primeiro nome"
            />
          </div>

          <div>
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Sua mensagem"
            ></textarea>
          </div>
        </fieldset>
      </form>

      <div className="address">
        <h3>Endereço</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          eqeqeqweqweqweqweeeeeee eeeeeeeeeeeeeeeeeeee
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
