import type { ReactNode } from 'react';
import { Montserrat, Sacramento } from 'next/font/google';
import Link from 'next/link';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import styles from './projects-section.module.css';

type Project = {
    name: string;
    summaryPreview: ReactNode;
    detailsIntro?: ReactNode[];
    highlights?: ReactNode[];
    tags: string[];
    repo?: string;
    employer?: {
        name: string;
        url?: string;
    };
};

const montserrat = Montserrat({ weight: ['400', '600'], subsets: ['latin'] });
const sacramento = Sacramento({ weight: ['400'], subsets: ['latin'] });
const projects: Project[] = [
    {
        name: 'Urdu Character Generation Model (GAN-based)',
        summaryPreview: (
            <p>
                Developed a Generative Adversarial Network (GAN) capable of synthesizing handwritten Urdu letters from
                the MNIST dataset structure, generating realistic characters that respect natural script complexity.
            </p>
        ),
        detailsIntro: [
            <p>
                Built an API layer with FastAPI to expose the model for inference and paired it with a React frontend for
                interactive exploration, letting users pick a letter and immediately view new AI-generated samples.
            </p>,
            <p>Deployed the stack with Docker and Firebase storage to manage trained weights and generated assets.</p>,
        ],
        highlights: [
            <>
                <strong>Curriculum design:</strong> Iteratively tuned generator and discriminator learning schedules to
                stabilise Urdu script formation.
            </>,
            <>
                <strong>Evaluation pipeline:</strong> Automated FID scoring and human-in-the-loop reviews to benchmark
                realism before releases.
            </>,
        ],
        tags: ['PyTorch', 'Generative Adversarial Networks', 'FastAPI', 'Docker', 'React', 'Firebase bucket'],
        repo: 'https://github.com/SyedAhris/folio3GANsFastAPI/',
    },
    {
        name: 'C4lie - AED Cabinet Management Tool',
        employer: {
            name: 'Sofstica Solutions',
            url: 'https://www.sofstica.com/',
        },
        summaryPreview: (
            <p>
                Strengthened the backend platform powering AED cabinet management, covering geo-tagged cabinet
                inventory, installer linkage, and service scheduling while resolving SonarQube issues in a Spring Boot
                codebase.
            </p>
        ),
        highlights: [
            <>
                <strong>Asset taxonomy:</strong> Introduced a categorical AWS S3 structure so assets stay traceable—for
                example, user profile photos moved under <code>/user/{'{'}user_id{'}'}/profile_pic.png</code>.
            </>,
            <>
                <strong>Notification workflows:</strong> Implemented orchestration pairing FCM push messages with
                actionable buttons for Android and iOS.
            </>,
            <>
                <strong>Data ops:</strong> Added CSV/Excel import-export via Apache POI and optimised analytics queries
                backing the time dashboard REST APIs.
            </>,
            <>
                <strong>Realtime support:</strong> Led multilingual notification copy and delivered the Guardian Angel
                module with STOMP WebSockets for live alerts.
            </>,
        ],
        tags: ['Java', 'Springboot', 'Quartz', 'Apache POI', 'AWS S3'],
        // repo: 'https://github.com/SyedAhris',
    },
    {
        name: 'Startup Launchpad',
        employer: {
            name: 'Independent Project',
        },
        summaryPreview: (
            <p>
                Full-stack toolkit that automates landing page creation, drip newsletters, and product onboarding for
                early-stage founders.
            </p>
        ),
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
                        {project.employer && (
                            <span className={styles.employerBadge}>
                                <span className={styles.employerPrefix}>Built at</span>
                                {project.employer.url ? (
                                    <a
                                        className={styles.employerLink}
                                        href={project.employer.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {project.employer.name}
                                    </a>
                                ) : (
                                    <span className={styles.employerName}>{project.employer.name}</span>
                                )}
                            </span>
                        )}
                        <div className={styles.summary}>
                            <div className={styles.summaryPreview}>{project.summaryPreview}</div>
                            {(project.detailsIntro || project.highlights) && (
                                <details className={styles.expandable}>
                                    <summary className={styles.toggle}>
                                        <span className={styles.closedLabel}>View more</span>
                                        <span className={styles.openLabel}>View less</span>
                                        <FaChevronDown className={styles.toggleIcon} aria-hidden />
                                    </summary>
                                    <div className={styles.moreContent}>
                                        {project.detailsIntro?.map((intro, index) => (
                                            <div key={`${project.name}-intro-${index}`} className={styles.detailBlock}>
                                                {intro}
                                            </div>
                                        ))}
                                        {project.highlights && (
                                            <ul className={styles.highlightList} role="list">
                                                {project.highlights.map((highlight, index) => (
                                                    <li key={`${project.name}-highlight-${index}`}>{highlight}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </details>
                            )}
                        </div>
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
