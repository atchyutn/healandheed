/**
 * Generates public/og-image.png (1200x630) for social sharing.
 * Run with: npm run og
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const asset = (name) => join(root, 'src/assets', name);

const W = 1200;
const H = 630;

const background = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="cream" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fdf8ef"/>
      <stop offset="1" stop-color="#faf1e2"/>
    </linearGradient>
    <linearGradient id="pink" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f6cfd8"/>
      <stop offset="1" stop-color="#f2bccb"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#cream)"/>

  <!-- soft decorative shapes -->
  <circle cx="1070" cy="150" r="230" fill="#f4e3e0" opacity="0.7"/>
  <circle cx="960" cy="360" r="250" fill="url(#pink)" opacity="0.62"/>
  <circle cx="1120" cy="560" r="150" fill="#e8e2f2" opacity="0.8"/>
  <circle cx="60" cy="600" r="170" fill="#e5ecdf" opacity="0.85"/>
  <path d="M0 500 C 150 455, 265 540, 420 505 L420 630 L0 630 Z" fill="#eef2e8" opacity="0.75"/>

  <!-- sparkles -->
  <g stroke="#c9a24a" stroke-width="4" stroke-linecap="round" opacity="0.7">
    <path d="M780 92 v28 M766 106 h28"/>
    <path d="M1128 300 v20 M1118 310 h20"/>
    <path d="M700 560 v18 M691 569 h18"/>
  </g>

  <!-- eyebrow -->
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif" fill="#b85a72">
    <text x="80" y="300" font-size="20" font-weight="600" letter-spacing="3.4">CHILD DEVELOPMENT &amp; REHABILITATION</text>
  </g>

  <!-- headline -->
  <g font-family="Georgia, Times New Roman, serif" fill="#2d1674">
    <text x="78" y="384" font-size="66" font-weight="700">Care that helps</text>
    <text x="78" y="454" font-size="66" font-weight="700" font-style="italic" fill="#b85a72">little ones bloom.</text>
  </g>

  <!-- subline -->
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif" fill="#5c5470" font-size="22">
    <text x="80" y="504">Occupational · Behaviour · Speech Therapy · Special Education</text>
  </g>

  <!-- contact bar -->
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif" fill="#3c3352" font-size="18">
    <text x="80" y="582" font-weight="600">www.healandheed.org</text>
    <circle cx="284" cy="576" r="3" fill="#c9a24a"/>
    <text x="302" y="582">+91 74168 48323</text>
    <circle cx="458" cy="576" r="3" fill="#c9a24a"/>
    <text x="476" y="582">L.B. Nagar, Hyderabad</text>
  </g>

  <rect x="0" y="620" width="${W}" height="10" fill="#2d1674"/>
  <rect x="0" y="620" width="300" height="10" fill="#e36c8b"/>
  <rect x="300" y="620" width="300" height="10" fill="#c9a24a"/>
</svg>`;

const trimmed = (input, width, options = {}) =>
  sharp(input, { density: 260 })
    .trim({ threshold: 10 })
    .resize({ width, ...options })
    .png()
    .toBuffer();

const logo = await trimmed(asset('h-logo.png'), 400);
const kid = await trimmed(asset('kid.svg'), 330);
const doctor = await trimmed(asset('doctor.svg'), 245);

const kidMeta = await sharp(kid).metadata();
const doctorMeta = await sharp(doctor).metadata();

await sharp(Buffer.from(background))
  .composite([
    { input: kid, left: 720, top: 330 - Math.round((kidMeta.height ?? 240) / 2) },
    {
      input: doctor,
      left: 945,
      top: 350 - Math.round((doctorMeta.height ?? 180) / 2),
    },
    { input: logo, left: 78, top: 78 },
  ])
  .png({ quality: 92 })
  .toFile(join(root, 'public/og-image.png'));

console.log('Wrote public/og-image.png');
