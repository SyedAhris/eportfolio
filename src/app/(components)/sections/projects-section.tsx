import Link from 'next/link';
import { Montserrat, Sacramento } from 'next/font/google';
import styles from './projects-section.module.css';
import { FaArrowRight } from 'react-icons/fa';

const montserrat = Montserrat({ weight: ['400', '600'], subsets: ['latin'] });
const sacramento = Sacramento({ weight: ['400'], subsets: ['latin'] });
const projects = [
    {
        name: 'Portfolio Platform',
        summary: 'Responsive Next.js portfolio with modular components, motion accents, and CMS-ready structure.',
        tags: ['Next.js', 'TypeScript', 'Design Systems'],
        repo: 'https://github.com/SyedAhris/eportfolio',
    },
    {
        name: 'Urdu GAN Demo',
        summary: 'Text-to-image experiments for Urdu calligraphy using GAN pipelines optimized for local GPUs.',
        tags: ['PyTorch', 'GANs', 'Computer Vision'],
        repo: 'https://github.com/SyedAhris',
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
                        <div className={styles.links}>
                            <Link className={styles.link} href={project.repo} target="_blank" rel="noreferrer">
                                View on GitHub <FaArrowRight />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
