import type { CSSProperties } from 'react';
import styles from './about-section.module.css';
import { Montserrat, Sacramento } from 'next/font/google';
import { FaBriefcase, FaBookOpen, FaSchool, FaUniversity } from 'react-icons/fa';

const montserrat = Montserrat({
    weight: ['400', '600'],
    subsets: ['latin'],
});

const sacramento = Sacramento({ weight: ['400'], subsets: ['latin'] });

const milestones = [
    {
        year: '2006-2017',
        title: 'Habib Public School',
        subtitle: 'O-Levels',
        highlights: ['1 A*, 4 As, 5 Bs', 'Science society lead'],
        icon: <FaSchool />,
    },
    {
        year: '2017-2019',
        title: 'Cordoba School for A Levels',
        subtitle: 'A-Levels',
        highlights: ['1 A, 1 B, 2 Cs', 'STEM mentor'],
        icon: <FaSchool />,
    },
    {
        year: '2019-2023',
        title: 'IBA Karachi',
        subtitle: 'BS Computer Science',
        highlights: ['CGPA 3.49', 'Deep learning studio'],
        icon: <FaUniversity />,
    },
    {
        year: 'Summer 2022',
        title: 'Folio3 AI Apprenticeship',
        subtitle: 'ML Research Sprint',
        highlights: ['Urdu GAN demo', 'End-to-end pipeline'],
        icon: <FaBookOpen />,
    },
    {
        year: '2023 Nov - Present',
        title: 'Sofstica Solutions',
        subtitle: 'Junior Software Engineer',
        highlights: ['Full-stack launches', 'Mentor junior devs'],
        icon: <FaBriefcase />,
    },
];

const AboutSection = () => {
    return (
        <section id="about" className={`${styles.container} ${montserrat.className}`}>
            <h2 className={`${styles.heading} ${sacramento.className}`}>My Journey</h2>
            <div className={styles.timeline}>
                {milestones.map((milestone, index) => {
                    const alignment =
                        index % 2 === 0 ? styles.timelineItemLeft : styles.timelineItemRight;
                    return (
                        <div
                            key={`${milestone.year}-${milestone.title}`}
                            className={`${styles.timelineItem} ${alignment}`}
                            style={{ '--index': index.toString() } as CSSProperties}
                        >
                            <div className={styles.marker}>
                                <span className={styles.icon}>{milestone.icon}</span>
                            </div>
                            <div className={styles.card}>
                                <span className={styles.year}>{milestone.year}</span>
                                <h3 className={styles.title}>{milestone.title}</h3>
                                <span className={styles.subtitle}>{milestone.subtitle}</span>
                                <div className={styles.highlights}>
                                    {milestone.highlights.map((highlight, highlightIndex) => (
                                        <span
                                            key={`${milestone.year}-${highlightIndex}`}
                                            className={styles.highlight}
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AboutSection;
