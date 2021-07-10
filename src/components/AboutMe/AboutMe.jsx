/* eslint-disable*/
import { useState, useEffect } from "react";

import styles from "./aboutMe.css";

function aboutInfo() {
  const [AboutMe, setAboutMe] = useState([]);

  return (
    <section className="container">
        <div className="AboutMe-description main-description">
            <div className="WAMI">
                <h1>Hey, I'm Aslay</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="Grid-description">
                <div className="AboutMe">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, delectus non totam at qui ratione labore eaque illum cumque atque nihil ea vel officiis placeat voluptatum, ipsum laborum vero nobis.
                    </p>
                </div>

                <div className="AboutEx">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis molestias distinctio consequuntur inventore, harum numquam praesentium incidunt fugiat aliquid, nam, id consectetur velit rerum obcaecati eum atque. Inventore, ipsam sed?
                    </p>
                </div>
            </div>
        </div>
        <div className="background-animate" >
            <ul className="transition-animate">
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
