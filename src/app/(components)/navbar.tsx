"use client";

import { useEffect, useRef, useState } from 'react';
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
    const navbarRef = useRef<HTMLElement | null>(null);
    const navHeightRef = useRef(0);

    useEffect(() => {
        const updateNavHeight = () => {
            navHeightRef.current = navbarRef.current?.offsetHeight ?? 0;
        };
        updateNavHeight();
        window.addEventListener('resize', updateNavHeight);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.4,
                rootMargin: `-${navHeightRef.current}px 0px -45% 0px`,
            }
        );

        navItems.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            window.removeEventListener('resize', updateNavHeight);
            navItems.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) {
                    observer.unobserve(section);
                }
            });
            observer.disconnect();
        };
    }, []);

    return (
        <nav ref={navbarRef} className={styles.navbarLayout}>
            <a href="#home" className={`${styles.name} ${sacramento.className}`}>
                Syed Ahris
            </a>
            <div className={styles.links}>
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`${styles.link} ${montserrat.className} ${activeSection === item.id ? styles.activeLink : ''}`}
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
