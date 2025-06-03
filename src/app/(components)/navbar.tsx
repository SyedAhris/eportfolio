"use client";
import styles from './navbar.module.css'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sacramento, Montserrat } from "next/font/google";

// @ts-ignore
const sacramento = Sacramento({weight:['400'],subsets: ['latin']})
const montserrat  = Montserrat({weight:['400'],subsets: ['latin']})
export default function Navbar () {

    // const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const currentPath  = usePathname();
    // const headerList = headers();
    // const currentPath = headerList.get('x-invoke-path');
    //@ts-ignore
    return (
        <div className={styles.navbarLayout}>
            <div>
                <Link className={`${styles.name} ${sacramento.className}`} href="/">Syed Ahris</Link>
            </div>
            <div className={styles.links}>
                <Link className={`${currentPath === '/' ? styles.activeLink : ''} ${styles.link} ${montserrat.className}`} href="/">Home</Link>
                <Link className={`${currentPath === '/about' ? styles.activeLink : ''} ${styles.link} ${montserrat.className}`} href="/about">About Me</Link>
                <Link className={`${currentPath === '/projects' ? styles.activeLink : ''} ${styles.link} ${montserrat.className}`} href="/projects">Projects</Link>
                <Link className={`${currentPath === '/contact' ? styles.activeLink : ''} ${styles.link} ${montserrat.className}`} href="/contact">Contact Me</Link>
            </div>
            <div>
                <Link href='https://www.github.com/SyedAhris' target='_blank'>
                        <Image className={styles.github} src={'github.svg'} alt={'Github account link'} width={42} height={42}/>
                </Link>
            </div>
        </div>
    )
}