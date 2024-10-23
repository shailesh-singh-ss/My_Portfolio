import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
    const experience = {
        role: 'Gen AI Intern',
        company: 'Tap Health',
        duration: 'Jul 2024 - Present',
        description:`
            Engineered an AI coach and content generation system aimed at providing personalized diabetes management and caregiver support. Led the development of digital diagnostic modules and spearheaded advanced AI experiments, leveraging large language models. Deployed scalable AI solutions utilizing Python, PyTorch, LangChain, Hugging Face, and Azure Cloud, ensuring efficient and secure deployment across platforms.

            `

    };

    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>Professional Journey</h2>
            <div className={styles.experienceCard}>
                <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.role}>
                            {experience.role} <span className={styles.company}>@ {experience.company}</span>
                        </h3>
                        <p className={styles.duration}>{experience.duration}</p>
                    </div>
                    <p className={styles.description}>{experience.description}</p>
                </div>
            </div>
        </section>
    );
};

export default Experience;
