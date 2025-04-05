import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <h1 className={styles.t}>I’m a self-taught coder from India, skilled in crafting fast frontends, robust backends, and clean UIs. My goal? Deliver scalable solutions and break out to a better world.</h1>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me Posing in front of a mirror"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>
              Responsive, user-friendly sites are my forte.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>
              <p>
              Fast APIs and systems are my specialty.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI</h3>
              <p>
                Designed landing pages and systems for various clients.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};