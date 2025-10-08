import { Montserrat, Sacramento } from 'next/font/google';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from './projects-section.module.css';

const montserrat = Montserrat({ weight: ['400', '600'], subsets: ['latin'] });
const sacramento = Sacramento({ weight: ['400'], subsets: ['latin'] });
const projects = [
    {
        name: 'Urdu Character Generation Model (GAN-based)',
        summary: 'Developed a Generative Adversarial Network (GAN) capable of synthesizing handwritten Urdu letters from the MNIST dataset structure. The model generates realistic characters based on input categories, combining deep learning with natural script complexity. \nBuilt an API layer using FastAPI for model inference and a React frontend for visual interaction, allowing users to select a letter and instantly view AI-generated samples.',
        tags: ['PyTorch', 'Generative Adversarial Networks', 'FastAPI', 'Docker', "React", "Firebase bucket"],
        repo: 'https://github.com/SyedAhris/folio3GANsFastAPI/',
    },
    {
        name: 'C4lie - AED Cabinet Management Tool',
        summary: 'I worked on the backend of C4lie, a tool designed to manage AED cabinets, including tracking cabinet locations, linking installers, and handling servicing schedules. Initially, I focused on fixing SonarQube issues while learning Java Spring Boot, and later I proposed and implemented a new categorical S3 storage structure to better organize assets. For example, user images were moved to a more organized path like /user/user_id/profile_pic.png. \nOne of my key contributions was building a notification management system that integrated FCM for Android/iOS push notifications with actionable buttons. I also developed CSV/Excel import/export features using Apache POI and designed REST APIs for time dashboard analytics, which included optimized SQL queries. Additionally, I added multilingual support for all notification content and developed the Guardian Angel module, which utilized STOMP WebSockets for real-time communication, allowing instant alerts and updates.',
        tags: ['Java', 'Springboot', 'Quartz', 'Apache POI', "AWS S3"],
        // repo: 'https://github.com/SyedAhris',
    },
    {
        name: 'Startup Launchpad',
        summary: 'Full-stack toolkit that automates landing pages, newsletters, and onboarding for early-stage founders.',
        tags: ['React', 'Node.js', 'Automation'],
        repo: 'https://github.com/SyedAhris',
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className={`${styles.section} ${montserrat.className}`}>
            <h2 className={`${styles.heading} ${sacramento.className}`}>Projects</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <article key={project.name} className={styles.card}>
                        <h3 className={styles.title}>{project.name}</h3>
                        <p className={styles.summary}>{project.summary}</p>
                        <div className={styles.tags}>
                            {project.tags.map((tag) => (
                                <span key={`${project.name}-${tag}`} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {project.repo && (
                            <div className={styles.links}>
                                <Link className={styles.link} href={project.repo} target="_blank" rel="noreferrer">
                                    View on GitHub <FaArrowRight />
                                </Link>
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
