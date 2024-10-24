import React, {useEffect, useRef} from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
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

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills & Achievements</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historylist}>
                <a href={historyItem.link} key={id} target="_blank" className={styles.historyItem} ref={el => itemsRef.current[id] = el}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`} className={styles.historyItemImage}
                  />
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.rank} \u0009 | \u0009 ${historyItem.rating}`}</p>
                    <ul className={styles.historyItemExperiences}>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
