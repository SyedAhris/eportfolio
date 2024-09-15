import styles from './about.module.css';
import {Montserrat, Sacramento} from 'next/font/google';
import {FaBriefcase, FaGraduationCap, FaSchool, FaUniversity} from 'react-icons/fa';

// Load Montserrat font using next/font/google
const montserrat = Montserrat({
    weight: ['400', '600'],
    subsets: ['latin'],
});

const sacramento = Sacramento({weight: ['400'], subsets: ['latin']})

// Milestones Data
const milestones = [
    {
        year: '2010-2014',
        title: 'High School',
        description: 'Studied at XYZ High School, where I developed a strong foundation in science and mathematics.',
        icon: <FaSchool/>,
    },
    {
        year: '2014-2018',
        title: 'Undergraduate Degree',
        description: 'Completed my Bachelor’s in Computer Science at ABC University. Participated in coding competitions and research projects.',
        icon: <FaUniversity/>,
    },
    {
        year: '2018-2020',
        title: 'Master’s Degree',
        description: 'Pursued a Master’s in Software Engineering at DEF College, focusing on AI and Machine Learning.',
        icon: <FaGraduationCap/>,
    },
    {
        year: '2020-Present',
        title: 'Software Engineer at GHI Corp',
        description: 'Working as a Full-Stack Developer, building scalable web applications and leading a team of junior developers.',
        icon: <FaBriefcase/>,
    },
];

const About = () => {
    return (
        <div className={`${styles.container} ${montserrat.className}`}>
            <h1 className={`${styles.heading} ${sacramento.className}`}>My Journey</h1>
            <div className={styles.timeline}>
                {milestones.map((milestone, index) => (
                    <div key={index} className={`${styles.timelineItem}`}>
                        <div className={styles.circle}/>
                        <div className={styles.iconContainer}>
                            {milestone.icon}
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>{milestone.title}</h2>
                            <span className={styles.year}>{milestone.year}</span>
                            <p className={styles.description}>{milestone.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
