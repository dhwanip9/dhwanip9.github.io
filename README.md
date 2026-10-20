# dhwanip9.github.io

Personal website for **Dhwani Patel** — live at **https://dhwanip9.github.io**.

## Structure

A lean static site (no build step), served by GitHub Pages from `main` / root:

- `index.html` — the whole page (inline CSS + a little vanilla JS for scroll reveals, hero parallax, and runtime email assembly)
- `assets/about-portrait.jpeg`, `assets/north-star-v2.png` — images
- `Dhwani-Patel-Resume.pdf` — linked by the "Résumé" buttons (keep at root; the link is relative)
- `favicon.svg`, `.nojekyll`

## How it's updated

The design is authored in **Claude Design** (project "Personal journey scroll template",
file `Dhwani Patel v3.dc.html`). To update: edit there, then ask Claude Code to
"publish my latest" — it pulls the current design + assets via the design connector,
rebuilds this lean site, and pushes to `main`. A push triggers the GitHub Pages
branch build automatically (~1 min).

> Note: the contact email is assembled at runtime from split parts, so no plaintext
> address sits in the HTML for scrapers. Keep that pattern on rebuilds.
