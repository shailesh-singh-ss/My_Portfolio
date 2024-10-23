import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" className={styles.aboutItemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" className={styles.aboutItemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" className={styles.aboutItemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Competitive Programmer</h3>
              <p>
              I'm a competitive programmer with extensive experience in solving algorithmic challenges and participating in coding competitions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/aiIcon.png")} alt="UI icon" className={styles.aboutItemIcon} />
            <div className={styles.aboutItemText}>
              <h3>Generative AI</h3>
              <p>
                I specialize in developing and fine-tuning generative AI models, creating innovative solutions across various domains such as text, images, and more.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
