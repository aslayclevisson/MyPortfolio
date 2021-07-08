/* eslint-disable*/
import { useState, useEffect } from "react";

import styles from "./aboutMe.css";

function aboutInfo() {
  const [AboutMe, setAboutMe] = useState([]);

  return (
    <section className="container">
        <h1>Olá, eu sou o Aslay!</h1>
        <h4></h4>
        <p><span><a href="#">Propig</a></span></p>
    </section>
  );
}

export default aboutInfo;
