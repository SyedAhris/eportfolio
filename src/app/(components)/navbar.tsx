"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Sacramento, Montserrat } from 'next/font/google';
import styles from './navbar.module.css';

const sacramento = Sacramento({ weight: ['400'], subsets: ['latin'] });
const montserrat = Montserrat({ weight: ['400', '600'], subsets: ['latin'] });

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Me' },
];

const Navbar = () => {
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
            <Link href="https://www.github.com/SyedAhris" target="_blank">
                <Image className={styles.github} src="github.svg" alt="Github account link" width={42} height={42} />
            </Link>
        </nav>
    );
};

export default Navbar;
