import React, { useEffect, useRef } from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const elementTop = entry.boundingClientRect.top;
          const elementBottom = entry.boundingClientRect.bottom;
          const windowHeight = window.innerHeight;
          const middleZone = windowHeight / 3;

          const isInMiddle =
            elementTop <= (windowHeight / 2) + (middleZone / 2) &&
            elementBottom >= (windowHeight / 2) - (middleZone / 2);

          if (entry.isIntersecting && isInMiddle) {
            entry.target.classList.add(styles.active);
          } else {
            entry.target.classList.remove(styles.active);
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-50% 0px -50% 0px'
      }
    );

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const aboutItems = [
    {
      icon: "about/cursorIcon.png",
      title: "Frontend Developer",
      description: "I'm a frontend developer with experience in building responsive and optimized sites"
    },
    {
      icon: "about/serverIcon.png",
      title: "Backend Developer",
      description: "I have experience developing fast and optimised back-end systems and APIs"
    },
    {
      icon: "about/uiIcon.png",
      title: "Competitive Programmer",
      description: "I'm a competitive programmer with extensive experience in solving algorithmic challenges and participating in coding competitions."
    },
    {
      icon: "about/aiIcon.png",
      title: "Generative AI",
      description: "I specialize in developing and fine-tuning generative AI models, creating innovative solutions across various domains such as text, images, and more."
    }
  ];

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
          {aboutItems.map((item, index) => (
            <li
              key={index}
              ref={el => itemsRef.current[index] = el}
              className={styles.aboutItem}
            >
              <img
                src={getImageUrl(item.icon)}
                alt={`${item.title} icon`}
                className={styles.aboutItemIcon}
              />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};