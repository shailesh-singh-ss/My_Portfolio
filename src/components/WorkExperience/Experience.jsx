import React, {useEffect, useRef} from 'react';
import styles from './Experience.module.css';

const Experience = () => {
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

    const experience = [
        {
        role: 'Gen AI Intern',
        company: 'Tap Health',
        duration: 'Jul 2024 - Present',
        description:`
            Engineered an AI coach and content generation system aimed at providing personalized diabetes management and caregiver support. Led the development of digital diagnostic modules and spearheaded advanced AI experiments, leveraging large language models. Deployed scalable AI solutions utilizing Python, PyTorch, LangChain, Hugging Face, and Azure Cloud, ensuring efficient and secure deployment across platforms.

            `
        }
    ];

    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>Professional Journey</h2>
            <ul >
                {experience.map((experience, index) => (
                    <li
                        key={index}
                        ref={el => itemsRef.current[index] = el}
                        className={styles.experienceCard}
                    >
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.role}>
                                        {experience.role} <span className={styles.company}>@ {experience.company}</span>
                                    </h3>
                                    <p className={styles.duration}>{experience.duration}</p>
                                </div>
                                <p className={styles.description}>{experience.description}</p>
                            </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Experience;
