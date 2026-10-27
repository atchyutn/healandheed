import { site } from '../data/site';

type Crumb = { name: string; path: string };

export function breadcrumbSchema(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
  type = 'WebPage',
}: {
  name: string;
  description: string;
  path: string;
  type?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url: new URL(path, site.url).href,
    dateModified: new Date().toISOString().slice(0, 10),
    about: { '@id': `${site.url}/#organization` },
    isPartOf: { '@id': `${site.url}/#website` },
    inLanguage: 'en-IN',
  };
}
