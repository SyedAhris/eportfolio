import AboutSection from '@/app/(components)/sections/about-section';
import ContactSection from '@/app/(components)/sections/contact-section';
import ProjectsSection from '@/app/(components)/sections/projects-section';
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';
import styles from './home.module.css';

const robotoMono = Roboto_Mono({ weight: ['400'], subsets: ['latin'] });

const Home = () => {
    return (
        <main className={styles.rootLayout}>
            <section id="home" className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={`${robotoMono.className} ${styles.descriptionBox}`}>
                        <div className={styles.helloBox}>
                            <h1>
                                <span className={`${styles.typewriter} ${styles.helloPrimary}`}>Hello,</span>
                            </h1>
                            <h1>
                                <span className={`${styles.typewriter} ${styles.helloSecondary}`}>
                                    I&apos;m Syed Ahris
                                </span>
                            </h1>
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
                        <div className={styles.ctaWrapper}>
                            <a className={styles.resumeButton} href="/resume.pdf" download>
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
        </main>
    );
};

export default Home;
