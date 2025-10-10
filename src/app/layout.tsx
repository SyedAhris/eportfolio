import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Navbar from '@/app/(components)/navbar';

import styles from './rootLayout.module.css';
import './globals.css';

const siteName = 'Syed Ahris';
const fallbackUrl = new URL('https://syedahris.dev');
const deployedUrl = process.env.NEXT_PUBLIC_SITE_URL;
const configuredMetadataBase = deployedUrl ? new URL(deployedUrl) : undefined;
const primaryUrl = configuredMetadataBase ?? fallbackUrl;
const canonicalUrl = `${primaryUrl.origin}/`;
const socialPreviewImage = `${primaryUrl.origin}/profilepic_v2.png`;

const sharedDescription =
    'Syed Ahris is a software engineer focused on crafting resilient web experiences, showcasing projects, publications, and ways to collaborate.';

export const metadata: Metadata = {
    ...(configuredMetadataBase && { metadataBase: configuredMetadataBase }),
    title: {
        default: `${siteName} | Software Engineer & Technologist`,
        template: `%s | ${siteName}`,
    },
    description: sharedDescription,
    keywords: [
        'Syed Ahris',
        'Syed Ahmad Ahris',
        'software engineer portfolio',
        'full stack developer',
        'machine learning projects',
        'web developer in Pakistan',
        'Next.js engineer',
        'Syed Ahris projects',
    ],
    authors: [{ name: siteName, url: canonicalUrl }],
    creator: siteName,
    publisher: siteName,
    category: 'portfolio',
    applicationName: `${siteName} Portfolio`,
    generator: 'Next.js 13',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: canonicalUrl,
        title: `${siteName} | Software Engineer & Technologist`,
        description: sharedDescription,
        siteName,
        images: [
            {
                url: socialPreviewImage,
                width: 512,
                height: 512,
                alt: `${siteName} portfolio preview`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteName} | Software Engineer & Technologist`,
        description: sharedDescription,
        images: [socialPreviewImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    icons: {
        icon: '/profilepic_v2.png',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
        userScalable: true,
    },
    ...(configuredMetadataBase && {
        alternates: {
            canonical: '/',
        },
    }),
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={styles.body}>
                <div className={styles.rootLayout}>
                    <Navbar />
                    <div id="main-content" className={styles.content}>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
