/* eslint-disable*/
import { useState, useEffect } from "react";

import styles from "./aboutMe.css";

function aboutInfo() {
  const [AboutMe, setAboutMe] = useState([]);

  return (
    <section className="container">
        <div>
            <h1>Hey, I'm Aslay</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe sint numquam omnis dolorum magnam incidunt magni quo commodi placeat quas atque illum beatae enim quibusdam, ullam dolorem deleniti cumque?
            </p>
        </div>
        <div class="background-animate" >
                <ul class="transition-animate">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
    </div >
    </section>
  );
}

export default aboutInfo;
