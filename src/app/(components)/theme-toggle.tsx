"use client";

import { useEffect, useState } from 'react';

import styles from './navbar.module.css';

type Theme = 'light' | 'dark';

type ThemeToggleProps = {
    initialTheme?: Theme;
};

const ThemeToggle = ({ initialTheme }: ThemeToggleProps) => {
    const [theme, setTheme] = useState<Theme | null>(initialTheme ?? null);

    useEffect(() => {
        if (!theme) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
    }, [theme]);

    const resolvedTheme = theme ?? initialTheme ?? 'light';
    const isDark = resolvedTheme === 'dark';

    const handleToggle = () => {
        const nextTheme: Theme = isDark ? 'light' : 'dark';
        setTheme(nextTheme);
        document.documentElement.dataset.theme = nextTheme;
        document.cookie = `theme=${nextTheme}; path=/; max-age=31536000; samesite=lax`;
    };

    return (
        <button
            type="button"
            className={styles.themeToggle}
            onClick={handleToggle}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
            <span className={styles.themeToggleIcon} aria-hidden="true">
                {isDark ? (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 14.5C19.8 14.9 18.5 15.1 17.2 15.1C11.7 15.1 7.3 10.7 7.3 5.2C7.3 3.9 7.5 2.6 7.9 1.4C4.5 2.7 2 6 2 9.9C2 15.1 6.2 19.3 11.4 19.3C15.3 19.3 18.7 16.9 21 14.5Z"
                            fill="currentColor"
                        />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 4V2M12 22V20M4 12H2M22 12H20M18.4 5.6L19.8 4.2M4.2 19.8L5.6 18.4M5.6 5.6L4.2 4.2M19.8 19.8L18.4 18.4"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                )}
            </span>
        </button>
    );
};

export default ThemeToggle;
