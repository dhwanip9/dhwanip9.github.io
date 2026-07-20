# dhwanip9.github.io

Personal website for **Dhwani Patel** — bridging science, strategy, and storytelling.

A single-page site with a sticky nav, a hero, an "about," a "Where I've built"
institution grid, a "What I bring" toolkit (Technical / Transferable / Soft),
split-panel past-work sections, a current-project card, and a contact section
with résumé download. Reveal-on-scroll animation throughout.

## Tech

- **[Astro](https://astro.build)** — static output, near-zero client JS
- Vanilla TypeScript for the scroll interactions (reveal-on-scroll,
  city stepper, hero parallax) — no runtime framework
- Google Fonts: Cormorant Garamond + Jost

## Develop

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build into ./dist
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers the [GitHub Actions workflow](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages at
**https://dhwanip9.github.io**.

## Editing content

Everything lives in [`src/pages/index.astro`](src/pages/index.astro). Notable spots
to personalize:

- **Portrait & past-work photos** — currently styled placeholders. Drop real images
  into `public/` and swap the placeholder blocks for `<img>` tags.
- **"Currently working on"** card — replace the placeholder title and copy.
