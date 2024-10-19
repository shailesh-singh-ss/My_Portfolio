import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shailesh</h1>
        <p className={styles.description}>
          I'm a fresher software engineer interested in full-stack development, generative AI and competitive programming. In this guide, I will detail my history, skillset, and passions in these realms so you can have a better understanding of the full range of what i'm able to and aim to accomplish.
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:ss.forcoding@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="https://drive.google.com/file/d/19iYfN0EjPmNk-6KZwG6nkBUv1ra3CSoW/view?usp=sharing" target="_blank" className={styles.contactBtn}>
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
