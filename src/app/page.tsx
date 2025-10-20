import AboutSection from '@/app/(components)/sections/about-section';
import ContactSection from '@/app/(components)/sections/contact-section';
import ProjectsSection from '@/app/(components)/sections/projects-section';
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';
import Script from 'next/script';
import styles from './home.module.css';

const robotoMono = Roboto_Mono({ weight: ['400'], subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://syedahris.dev';

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Syed Ahris',
    url: siteUrl,
    image: `${siteUrl}/profilepic_v2.png`,
    jobTitle: 'Software Engineer',
    worksFor: {
        '@type': 'Organization',
        name: 'Sofstica Solutions',
    },
    alumniOf: [
        {
            '@type': 'CollegeOrUniversity',
            name: 'IBA Karachi',
            sameAs: 'https://www.iba.edu.pk',
        },
    ],
    email: 'mailto:syed@ahris.dev',
    sameAs: [
        'https://www.linkedin.com/in/SyedAhris',
        'https://github.com/SyedAhris',
    ],
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karachi',
        addressRegion: 'Sindh',
        addressCountry: 'PK',
    },
    knowsAbout: [
        'Full Stack Development',
        'Next.js',
        'TypeScript',
        'Machine Learning',
        'Cloud Infrastructure',
        'Product Strategy',
    ],
    nationality: 'Pakistani',
};

const Home = () => {
    return (
        <main className={styles.rootLayout}>
            <section id="home" className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={`${robotoMono.className} ${styles.descriptionBox}`}>
                        <div className={styles.helloBox}>
                            <h1 className={styles.heroTitle}>
                                <span className={`${styles.typewriter} ${styles.helloPrimary}`}>
                                    Hello,
                                </span>
                                <span className={`${styles.typewriter} ${styles.helloSecondary}`}>
                                    I&apos;m Syed Ahris
                                </span>
                            </h1>
                            {/* <p className={styles.heroTagline}>
                                Software engineer building resilient platforms, machine learning prototypes, and
                                delightful product experiences.
                            </p> */}
                        </div>
                        <div className={styles.description}>
                            <p className={styles.descriptionPrint}>
                                <span className={`${styles.typewriter} ${styles.descriptionPrimary}`}>
                                    print(&apos;Expanding Horizons&apos;)
                                </span>
                            </p>
                            <p className={styles.descriptionOther}>
                                <span className={`${styles.typewriter} ${styles.descriptionSecondary}`}>
                                    # A simple <b>spirit</b> expanding <b>horizons</b> through
                                </span>
                            </p>
                            <p className={styles.descriptionOther}>
                                <span className={`${styles.typewriter} ${styles.descriptionTertiary}`}>
                                    # <b>curiosity</b>, <b>innovation</b>, and the art of <b>coding</b>.
                                </span>
                            </p>
                        </div>
                        {/* <p className={styles.heroSummary}>
                            Syed Ahris is a Karachi-based software engineer who blends Next.js, TypeScript,
                            and machine learning to deliver reliable web applications, automation, and
                            human-centered product experimentation.
                        </p>
                        <ul className={styles.heroKeywords}>
                            <li className={styles.heroKeyword}>Next.js &amp; React</li>
                            <li className={styles.heroKeyword}>TypeScript &amp; Node.js</li>
                            <li className={styles.heroKeyword}>Machine Learning</li>
                            <li className={styles.heroKeyword}>Cloud &amp; DevOps</li>
                            <li className={styles.heroKeyword}>Product Innovation</li>
                        </ul> */}
                        <div className={styles.ctaWrapper}>
                            <a
                                className={styles.resumeButton}
                                href="https://drive.google.com/file/d/1tT2ulY5IhMTCV5KV8s1A_UxRS1wiwsGV/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Download Resume</span>
                                <svg
                                    className={styles.resumeIcon}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M6 20H18M12 4V16M12 16L8 12M12 16L16 12"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.bubbleCluster}>
                            <div className={styles.bubblePrimary}>
                                <Image
                                    className={styles.profileImage}
                                    src="/profilepic_v2.png"
                                    alt="Creator's profile picture"
                                    width={258}
                                    height={258}
                                />
                            </div>
                            <span className={`${styles.bubbleAccent} ${styles.bubbleAccentOne}`} />
                            <span className={`${styles.bubbleAccent} ${styles.bubbleAccentTwo}`} />
                            <span className={`${styles.bubbleAccent} ${styles.bubbleAccentThree}`} />
                            <span className={`${styles.bubbleAccent} ${styles.bubbleAccentFour}`} />
                            <span className={`${styles.bubbleAccent} ${styles.bubbleAccentFive}`} />
                        </div>
                    </div>
                </div>
                <div className={styles.tabsWrapper}>
                    {/* <Tabs /> */}
                </div>
            </section>
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Script id="person-jsonld" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(personJsonLd)}
            </Script>
        </main>
    );
};

export default Home;
