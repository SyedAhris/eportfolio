import type { MetadataRoute } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://syedahris.dev').replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        {
            url: `${siteUrl}/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
