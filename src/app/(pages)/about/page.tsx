import styles from './about.module.css';
import {Montserrat, Sacramento} from 'next/font/google';
import {FaBriefcase, FaBookOpen, FaSchool, FaUniversity} from 'react-icons/fa';

// Load Montserrat font using next/font/google
const montserrat = Montserrat({
    weight: ['400', '600'],
    subsets: ['latin'],
});

const sacramento = Sacramento({weight: ['400'], subsets: ['latin']})

// Milestones Data
const milestones = [
    {
        year: '2006-2017',
        title: 'Habib Public School',
        description: 'Completed O-Levels with 1 A*, 4 As and 5 Bs.',
        icon: <FaSchool/>,
    },
    {
        year: '2017-2019',
        title: 'Cordoba School For A\'Levels',
        description: 'Completed A-Levels with 1 A, 1 B and 2 Cs',
        icon: <FaSchool/>,
    },
    {
        year: '2019-2023',
        title: 'Institute of Business Administration - Karachi',
        description: 'Completed Bachelors in Computer Science with a CGPA of 3.49. Learned all the basics of programming and software development, as well as some advanced topics like deep learning and design patterns.',
        icon: <FaUniversity/>,
    },
    {
        year: 'Summer 2022',
        title: 'AI Apprenticeship at Folio3',
        description: 'Worked on a demo project to generate Urdu handwritten letters using a Generative Adversarial Network (GAN) with a team of four in a collaborative office environment under tight deadlines. Managed the entire project pipeline from data collection and preprocessing to model creation, evaluation, and deployment. Utilized technologies like Google Colab, Git, DVC, TensorFlow, PyTorch, FastAPI, and Docker. The project serves as a proof of concept for automated data creation and advances the field of AI-generated handwriting.',
        icon: <FaBookOpen/>,
    },
    {
        year: '2023 Nov -Present',
        title: 'Junior Software Engineer at Sofstica Solutions',
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
