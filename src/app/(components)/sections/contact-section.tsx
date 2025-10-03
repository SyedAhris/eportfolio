import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import styles from './contact-section.module.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const montserrat = Montserrat({ weight: ['400', '600'], subsets: ['latin'] });

const ContactSection = () => {
    return (
        <section id="contact" className={`${styles.section} ${montserrat.className}`}>
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>Let&apos;s Collaborate</h2>
                <p className={styles.subtitle}>
                    Ready to launch something bold? Drop a line and I&apos;ll reply within one business day.
                </p>
                <div className={styles.actions}>
                    <Link className={styles.action} href="mailto:syed@ahris.dev">
                        <FaEnvelope /> Email Me
                    </Link>
                    <Link className={styles.action} href="https://cal.com" target="_blank" rel="noreferrer">
                        <FaPhoneAlt /> Book a Call
                    </Link>
                </div>
                <div className={styles.meta}>
                    <span>
                        <FaMapMarkerAlt /> Karachi, PK
                    </span>
                    <span>
                        <FaPhoneAlt /> +92-300-0000000
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
