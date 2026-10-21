# ELNAGAR Portfolio

An English-language portfolio website for Mohamed Elnagar, built with Next.js, React, TypeScript, and Tailwind CSS. The existing custom styles are retained for the portfolio's bespoke editorial layout while Tailwind utilities and the ELNAGAR design tokens are available for ongoing UI development.

## Run locally

Requirements: Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to GitHub Pages

The GitHub Actions workflow builds and deploys the site when changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The site will be available at `https://mohamedsaady99.github.io/elnagar-portfolio/` after the first successful deployment.

## Build

```bash
npm run build
npm start
```

## Brand assets

- `public/elnagar-logo.png` — updated stacked gold E emblem and ELNAGAR wordmark on a transparent background.
- `public/mohamed-elnagar.jpg` — portrait used in the hero section.

## Tailwind design tokens

Defined in `tailwind.config.ts`: `elnagar-ink`, `elnagar-forest`, `elnagar-cream`, `elnagar-paper`, `elnagar-gold`, and `elnagar-gold-light`.

Project links and professional details are based on the supplied CV. Catalogi has no public URL listed in the CV, so no link is invented.
