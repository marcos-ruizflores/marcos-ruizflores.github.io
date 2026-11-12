# marcos-ruizflores.github.io

My personal site: who I am, where I've worked and what I've built. Available in English and Spanish.

**Live:** https://marcos-ruizflores.github.io

## Stack

- [Astro](https://astro.build) for a fully static site, with i18n routing (`/` English, `/es/` Spanish)
- Tailwind CSS v4 with a light and dark theme driven by CSS variables
- Self-hosted fonts (Plus Jakarta Sans, JetBrains Mono) and [Simple Icons](https://simpleicons.org)
- GitHub Actions builds and deploys to GitHub Pages on every push to `main`

## Running it locally

Requires Node 24 (see `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # output in dist/
```

## Where things live

```
src/i18n/content.ts   all the text, in both languages
src/data/profile.ts   links and the tech strip
src/components/       one component per section
public/cv/            the downloadable CV
```
