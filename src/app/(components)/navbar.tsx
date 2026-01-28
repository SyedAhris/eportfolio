import Image from 'next/image';
import Link from 'next/link';
import { Sacramento, Montserrat } from 'next/font/google';
import ThemeToggle from './theme-toggle';
import styles from './navbar.module.css';

const sacramento = Sacramento({ weight: ['400'], subsets: ['latin'] });
const montserrat = Montserrat({ weight: ['400', '600'], subsets: ['latin'] });

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'My Journey' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Me' },
];

type NavbarProps = {
    initialTheme?: 'light' | 'dark';
};

const Navbar = ({ initialTheme }: NavbarProps) => {
    return (
        <nav className={styles.navbarLayout}>
            <a href="#home" className={`${styles.name} ${sacramento.className}`}>
                Syed Ahris
            </a>
            <div className={styles.links}>
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`${styles.link} ${montserrat.className}`}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
            <div className={styles.socialLinks}>
                <ThemeToggle initialTheme={initialTheme} />
                <Link
                    className={styles.socialLink}
                    href="https://www.linkedin.com/in/SyedAhris"
                    target="_blank"
                    aria-label="LinkedIn profile"
                >
                    <Image className={styles.socialIcon} src="linkedin.svg" alt="LinkedIn account link" width={20} height={20} />
                </Link>
                <Link
                    className={styles.socialLink}
                    href="https://www.github.com/SyedAhris"
                    target="_blank"
                    aria-label="GitHub profile"
                >
                    <Image className={styles.socialIcon} src="github.svg" alt="GitHub account link" width={20} height={20} />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
