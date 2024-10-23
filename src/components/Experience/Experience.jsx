import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
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
                <a href={historyItem.link} key={id} target="_blank" className={styles.historyItem}>
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
