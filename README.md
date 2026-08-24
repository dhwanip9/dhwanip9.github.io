# Dhwani Patel — personal site

Two files, no build step, no dependencies:

- `index.html` — the entire site, self-contained (images, fonts, and scripts are inlined)
- `Dhwani-Patel-Resume.pdf` — linked by the "Résumé" buttons in the nav and contact section

## Publishing to GitHub Pages

Paste this to Claude Code from inside this folder:

> Publish this folder to GitHub Pages. Create a new public repo under my account if one doesn't exist,
> commit index.html and Dhwani-Patel-Resume.pdf at the repo root, push to main, then enable
> GitHub Pages (deploy from branch main, / root) and give me the live URL.

## Updating later

Replace `index.html` with a fresh export and ask Claude Code to commit and push. Keep both files
at the repository root — the résumé link is relative, so it breaks if the PDF moves into a subfolder.
