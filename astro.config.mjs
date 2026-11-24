import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Sitemap priorities are a hint for crawlers, not a ranking factor.
 * They are set here so the most useful pages are listed first and the
 * sitemap stays readable when submitted to Google Search Console.
 */
const priorityByPath = new Map([
  ['/', { changefreq: 'weekly', priority: 1.0 }],
  ['/therapy-centre-lb-nagar/', { changefreq: 'monthly', priority: 0.9 }],
  ['/services/', { changefreq: 'monthly', priority: 0.9 }],
  ['/contact/', { changefreq: 'monthly', priority: 0.8 }],
  ['/speech-therapy/', { changefreq: 'monthly', priority: 0.8 }],
  ['/occupational-therapy/', { changefreq: 'monthly', priority: 0.8 }],
  ['/behaviour-therapy/', { changefreq: 'monthly', priority: 0.8 }],
  ['/special-education/', { changefreq: 'monthly', priority: 0.8 }],
  ['/autism-support/', { changefreq: 'monthly', priority: 0.8 }],
  ['/adhd-support/', { changefreq: 'monthly', priority: 0.8 }],
  ['/speech-delay/', { changefreq: 'monthly', priority: 0.8 }],
  ['/blog/', { changefreq: 'weekly', priority: 0.7 }],
  ['/online-sessions/', { changefreq: 'monthly', priority: 0.7 }],
  ['/group-therapies/', { changefreq: 'monthly', priority: 0.7 }],
  ['/summer-program/', { changefreq: 'monthly', priority: 0.7 }],
  ['/about/', { changefreq: 'monthly', priority: 0.6 }],
  ['/our-team/', { changefreq: 'monthly', priority: 0.6 }],
]);

export default defineConfig({
  site: 'https://www.healandheed.org',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const hints = priorityByPath.get(path);

        if (hints) {
          return { ...item, ...hints };
        }

        if (path.startsWith('/blog/')) {
          return { ...item, changefreq: 'monthly', priority: 0.6 };
        }

        return { ...item, changefreq: 'monthly', priority: 0.5 };
      },
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
