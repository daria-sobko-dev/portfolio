# Daria Sobko — Portfolio

Personal portfolio website for **Daria Sobko**, a front-end developer specializing in
**WordPress** and **Webflow**.

Built from scratch with **React + Vite** and plain CSS (no UI framework) — a dark, single-page
site with smooth scroll navigation, scroll animations, a filterable project grid, and a custom cursor.

🔗 **Live:** _add your URL here_

## Tech stack

- **React 18 + Vite** (plain JavaScript)
- **Plain CSS** with custom properties (design tokens) — no Tailwind / CSS-in-JS
- **AOS** — scroll animations
- **Swiper** — carousels (where used)
- **lottie-react** — animated scroll arrow
- **react-type-animation** — typed hero role
- Fonts: **Poppins** + **Roboto Mono** (Google Fonts)
- Tech icons: **Simple Icons** (CC0), bundled locally

## Sections

`Hero → About → Expertise → Stack → Work → Experience → Contact`

- **Sticky header** that changes on scroll + anchor navigation
- **Custom cursor** (two circles, toggleable, auto-off on touch)
- **Project grid** with `All / WordPress / Webflow / Landing` filters (React `useState`, no Isotope)
- **Accordion** experience & education (one item open)
- **Project cards** with hover scale + overlay (description + tech tags)

## Project structure

```
src/
├─ components/   # one component per section + reusable (ProjectCard, Accordion, CustomCursor…)
├─ data/         # content: projects, experience, education, stack, certificates, about, navigation
├─ styles/       # variables.css (design tokens) + global.css
└─ assets/       # images, stack icons, lottie
public/          # favicon, OG image, CV
```

All content lives in `src/data/*` — edit those files to update text, projects, stack, etc.

## Getting started

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Deployment

Static site — deploy the contents of `dist/` to any static host (Netlify, Vercel, or shared
hosting via FTP/cPanel into `public_html`). No backend or server config required (anchor-based
navigation, so no SPA rewrite rules needed).

If hosting in a subfolder, set `base` in `vite.config.js` and rebuild.

## License

© Daria Sobko. Code is free to reference; content, screenshots and CV are personal.
