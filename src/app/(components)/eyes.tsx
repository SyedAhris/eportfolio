'use client';

import { useEffect, useRef } from 'react';
import styles from './eyes.module.css';

type EyesProps = {
    className?: string;
};

const Eyes = ({ className }: EyesProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const frameRef = useRef<number | null>(null);

    useEffect(() => {
        let reduceMotion = false;

        const resetPupil = () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
                frameRef.current = null;
            }
            const node = containerRef.current;
            if (!node) {
                return;
            }
            node.style.setProperty('--pupil-x', '0px');
            node.style.setProperty('--pupil-y', '0px');
        };

        const updatePupil = (event: MouseEvent) => {
            if (reduceMotion) {
                return;
            }
            const node = containerRef.current;
            if (!node) {
                return;
            }

            const rect = node.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dx = event.clientX - centerX;
            const dy = event.clientY - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            const maxOffset = Math.min(rect.width, rect.height) * 0.12;
            const clampedDistance = Math.min(distance, maxOffset);
            const ratio = clampedDistance / distance;
            const offsetX = dx * ratio;
            const offsetY = dy * ratio;

            node.style.setProperty('--pupil-x', `${offsetX}px`);
            node.style.setProperty('--pupil-y', `${offsetY}px`);
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (reduceMotion) {
                return;
            }
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
            frameRef.current = requestAnimationFrame(() => {
                updatePupil(event);
                frameRef.current = null;
            });
        };

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleMotionPreference = () => {
            reduceMotion = mediaQuery.matches;
            if (reduceMotion) {
                resetPupil();
            }
        };

        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', handleMotionPreference);
        } else if (typeof mediaQuery.addListener === 'function') {
            mediaQuery.addListener(handleMotionPreference);
        }

        handleMotionPreference();

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
                frameRef.current = null;
            }
            window.removeEventListener('mousemove', handleMouseMove);
            if (typeof mediaQuery.removeEventListener === 'function') {
                mediaQuery.removeEventListener('change', handleMotionPreference);
            } else if (typeof mediaQuery.removeListener === 'function') {
                mediaQuery.removeListener(handleMotionPreference);
            }
        };
    }, []);

    const combinedClassName = className ? `${styles.eyesContainer} ${className}` : styles.eyesContainer;

    return (
        <div ref={containerRef} className={combinedClassName} aria-hidden="true">
            <div className={styles.eye}>
                <span className={styles.pupil} />
            </div>
            <div className={styles.eye}>
                <span className={styles.pupil} />
            </div>
        </div>
    );
};

export default Eyes;
