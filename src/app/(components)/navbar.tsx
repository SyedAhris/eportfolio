"use client";

import { useEffect, useState, type MouseEvent } from 'react';
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
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.35,
                rootMargin: '-20% 0px -40% 0px',
            }
        );

        navItems.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            navItems.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) {
                    observer.unobserve(section);
                }
            });
            observer.disconnect();
        };
    }, []);

    const handleNavClick = (id: string) => (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    return (
        <nav className={styles.navbarLayout}>
            <button type="button" className={`${styles.name} ${sacramento.className}`} onClick={handleNavClick('home')}>
                Syed Ahris
            </button>
            <div className={styles.links}>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        className={`${styles.link} ${montserrat.className} ${activeSection === item.id ? styles.activeLink : ''}`}
                        onClick={handleNavClick(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <Link href="https://www.github.com/SyedAhris" target="_blank">
                <Image className={styles.github} src="github.svg" alt="Github account link" width={42} height={42} />
            </Link>
        </nav>
    );
};

export default Navbar;
