# Heal & Heed — website

Marketing site for **Heal & Heed Child Development & Rehabilitation Center**, L.B. Nagar, Hyderabad.

Built with [Astro](https://astro.build) as a static site: no client framework, no jQuery/Bootstrap, and no third-party weight beyond the booking iframe (loaded only on click).

## Requirements

- Node.js 20+ (developed on 22)
- npm

## Commands

| Command | Does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server on <http://localhost:4321> |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | Astro + TypeScript checks |
| `npm run og` | Regenerate `public/og-image.png` (1200×630) |

## Routes

| Route | Source |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/about/` | `src/pages/about.astro` |
| `/services/` | `src/pages/services.astro` |
| `/online-sessions/` | `src/pages/online-sessions.astro` |
| `/summer-program/` | `src/pages/summer-program.astro` |
| `/group-therapies/` | `src/pages/group-therapies.astro` |
| `/contact/` | `src/pages/contact.astro` |
| `/404.html` | `src/pages/404.astro` |

Old URLs are kept alive with meta-refresh redirect pages in `public/pages/` and `public/group-therapies/` so existing links and search results keep working.

## Project structure

```
src/
  assets/          brand illustrations and logos (kid.svg, doctor.svg, logo.png)
  components/      Header, Footer, PageHero, ArtPanel, Doodle, Icon, sections
  data/            all editable copy: site.ts, services.ts, content.ts, faqs.ts, summer.ts
  layouts/         BaseLayout.astro (SEO, schema, fonts, analytics, WhatsApp button)
  lib/             image imports and JSON-LD builders
  pages/           one file per route
  styles/          global.css design tokens and shared styles
public/            favicons, manifest, robots.txt, CNAME, OG image, legacy redirects
scripts/           generate-og.mjs, shoot.mjs (screenshots)
```

## Editing content

Most copy lives in `src/data/`:

- `site.ts` — phone, WhatsApp, address, hours, booking link, navigation, socials
- `services.ts` — the four therapy programmes
- `content.ts` — team, values, process, testimonials, gallery
- `faqs.ts` — FAQ sets (also feed FAQ structured data)
- `summer.ts` — summer programme 2026 weeks, schedule, pricing

Page-specific copy sits directly in the matching `.astro` file.

## Design system

Tokens are defined once in `src/styles/global.css` (`:root`): cream/pink/sage/purple palette, Playfair Display + Sora, spacing, radii and shadows. Fonts are self-hosted through `@fontsource` packages, so no Google Fonts request is made at runtime.

The header uses the original transparent brand logo on a soft lavender background (`#e8e1f8`), the same colour used behind page heroes. Page and section visuals are built with `ArtPanel.astro` (icon-led compositions) so the character illustrations stay reserved for a few high-value spots instead of being repeated on every section. The two brain mascots from the favicon artwork appear as small brand accents in the team and approach panels.

## SEO

- Canonical, Open Graph and Twitter tags per page (`BaseLayout.astro` + `src/lib/schema.ts`)
- `LocalBusiness`/`MedicalBusiness`, `Service`, `Course` and `FAQPage` JSON-LD, plus breadcrumbs
- `@astrojs/sitemap` generates `sitemap-index.xml` on build; `404` is excluded
- `public/robots.txt`, web manifest and favicons are in place
- Images ship with width/height and lazy loading except hero art

## Analytics and integrations

- Google Analytics `G-LCFH9LY5GY` is injected only in production builds.
- Booking uses Calendly, click-to-load (no iframe until asked), with a direct link fallback.
- The contact form composes a prefilled WhatsApp message in the browser; nothing is sent to a backend.

## Deploying

`npm run build` produces a fully static `dist/`. Upload or publish that folder to the host serving `www.healandheed.org` (the `public/CNAME` file keeps the custom domain when deploying to GitHub Pages). No server runtime is required.

## Legacy files

The original static site (`index.html`, `pages/`, `css/`, `group-therapies/`, `assets/`) is left untouched at the repository root for reference and rollback. It is not part of the Astro build; edit only `src/` and `public/` for the new site.
