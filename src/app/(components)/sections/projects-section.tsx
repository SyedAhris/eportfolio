'use client';

import { Montserrat, Sacramento } from 'next/font/google';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { FaArrowRight, FaChevronDown, FaTimes } from 'react-icons/fa';
import styles from './projects-section.module.css';

type Employer = {
    name: string;
    url?: string;
};

type Project = {
    name: string;
    summaryPreview: ReactNode;
    detailsIntro?: ReactNode[];
    highlights?: ReactNode[];
    tags: string[];
    repo?: string;
    employer?: Employer;
};

const montserrat = Montserrat({ weight: ['400', '600'], subsets: ['latin'] });
const sacramento = Sacramento({ weight: ['400'], subsets: ['latin'] });

const projects: Project[] = [
    {
        name: 'Urdu Character Generation Model (GAN-based)',
        employer: {
            name: 'Folio3 AI',
            url: 'https://www.folio3.ai/',
        },
        summaryPreview: (
            <p>
                Developed a Generative Adversarial Network (GAN) capable of synthesizing handwritten Urdu letters from
                the MNIST dataset structure, generating realistic characters that respect natural script complexity.
            </p>
        ),
        detailsIntro: [
            <p key="intro-1">
                Built an API layer with FastAPI to expose the model for inference and paired it with a React frontend for
                interactive exploration, letting users pick a letter and immediately view new AI-generated samples.
            </p>,
            <p key="intro-2">Deployed the stack with Docker and Firebase storage to manage trained weights and assets.</p>,
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
        name: 'C4life - AED Cabinet Management Tool',
        employer: {
            name: 'Sofstica Solutions',
            url: 'https://www.sofstica.com/',
        },
        summaryPreview: (
            <p>
                Strengthened the backend platform powering AED cabinet management—covering geo-tagged cabinet inventory,
                installer linkage, and service scheduling—while resolving SonarQube findings in a Spring Boot codebase.
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
                <strong>Data ops:</strong> Added CSV/Excel import–export via Apache POI and optimised analytics queries
                backing the time dashboard REST APIs.
            </>,
            <>
                <strong>Realtime support:</strong> Led multilingual notification copy and delivered the Guardian Angel
                module with STOMP WebSockets for live alerts.
            </>,
        ],
        tags: ['Java', 'Springboot', 'Quartz', 'Apache POI', 'AWS S3'],
    },
    {
        name: 'RRT Copilot',
        employer: {
            name: 'Sofstica Solutions',
            url: 'https://www.sofstica.com/',
        },
        summaryPreview: (
            <p>
                Strengthened the AI-driven backend powering proactive patient monitoring—enabling real-time insights,
                intelligent alerts, and nurse collaboration to prevent ICU transfers—while optimizing data pipelines,
                enhancing LangGraph agents, and ensuring secure, high-availability deployments.
            </p>
        ),
        highlights: [
            <>
                Developed a secure <b>real-time chat module</b> connecting all hospital staff to collaborate and discuss patient
                conditions efficiently.
            </>,
            <>
                Led discussions and research on <b>end-to-end encryption</b> implementation, defining a plan for secure
                communication across the hospital network.
            </>,
            <>
                Enhanced the existing <b>LangGraph agent</b> to deliver deeper patient insights and actionable alerts by
                adding rate limits, exponential backoff retries, and <b>prompt versioning</b>.
            </>,
            <>
                Integrated <b>Langfuse monitoring</b> for observability and introduced the “Talk to Patient Data” feature
                enabling AI-assisted conversations using <b>RAG pipelines with real-time data and vector embeddings</b>.
            </>,
            <>
                Owned the complete <b>deployment pipeline</b> for the service using Docker, GitHub Actions, and EC2 instances.
            </>,
        ],
        tags: ['Healthcare', 'AI Copilot', 'LangGraph', 'RAG', 'DevOps'],
    }

];

const toModalId = (name: string) => `project-modal-${name.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`;

const ProjectsSection = () => {
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    useEffect(() => {
        if (!activeProject) {
            return undefined;
        }

        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActiveProject(null);
            }
        };

        const originalOverflow = document.body.style.overflow;

        window.addEventListener('keydown', handleKeydown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeydown);
            document.body.style.overflow = originalOverflow;
        };
    }, [activeProject]);

    const modalTitleId = useMemo(
        () => (activeProject ? toModalId(activeProject.name) : undefined),
        [activeProject],
    );

    const closeModal = () => setActiveProject(null);

    return (
        <>
            <section id="projects" className={`${styles.section} ${montserrat.className}`}>
                <h2 className={`${styles.heading} ${sacramento.className}`}>Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project) => {
                        const hasExtendedContent = Boolean(project.detailsIntro?.length || project.highlights?.length);

                        return (
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
                                </div>
                                {hasExtendedContent && (
                                    <button
                                        type="button"
                                        className={styles.detailButton}
                                        onClick={() => setActiveProject(project)}
                                    >
                                        <span>View details</span>
                                        <FaChevronDown aria-hidden />
                                    </button>
                                )}
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
                        );
                    })}
                </div>
            </section>

            {activeProject && (
                <div className={styles.modalOverlay} role="presentation" onClick={closeModal}>
                    <div
                        className={styles.modal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={modalTitleId}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className={styles.modalContent}>
                            <button
                                type="button"
                                className={styles.modalClose}
                                onClick={closeModal}
                                aria-label="Close project details"
                            >
                                <FaTimes aria-hidden />
                            </button>
                            <div className={styles.modalHeader}>
                                <h3 id={modalTitleId} className={styles.modalTitle}>
                                    {activeProject.name}
                                </h3>
                                {activeProject.employer && (
                                    <span className={styles.modalEmployer}>
                                        <span className={styles.employerPrefix}>Built at</span>
                                        {activeProject.employer.url ? (
                                            <a
                                                className={styles.employerLink}
                                                href={activeProject.employer.url}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {activeProject.employer.name}
                                            </a>
                                        ) : (
                                            <span className={styles.employerName}>{activeProject.employer.name}</span>
                                        )}
                                    </span>
                                )}
                            </div>
                            <div className={styles.modalBody}>
                                <div className={styles.modalSummary}>{activeProject.summaryPreview}</div>
                                {activeProject.detailsIntro?.map((intro, index) => (
                                    <div key={`${activeProject.name}-intro-${index}`} className={styles.detailBlock}>
                                        {intro}
                                    </div>
                                ))}
                                {activeProject.highlights && (
                                    <div className={styles.modalHighlights}>
                                        <h4 className={styles.highlightHeading}>Highlights</h4>
                                        <ul className={styles.highlightList} role="list">
                                            {activeProject.highlights.map((highlight, index) => (
                                                <li key={`${activeProject.name}-highlight-${index}`}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {activeProject.repo && (
                                    <Link
                                        className={styles.modalLink}
                                        href={activeProject.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View on GitHub <FaArrowRight />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectsSection;
