# F & S Ventures — Corporate Website

Static marketing site for [F & S Ventures](https://fnsventures.in), a partnership firm building community-focused businesses across energy retail, wellness, and sustainable agriculture.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, about, businesses, future pipeline, contact |
| `promoters.html` | Founders' story, photo collage, and promoter profiles |
| `core-values.html` | Integrity, service excellence, long-term responsibility |
| `long-term-vision.html` | Community impact and sustainable expansion |
| `bishnupriyafuels.html` | Bishnupriya Fuels launch placeholder |
| `beautysalon.html` | Beauty salon coming-soon page |
| `efarm-chicken.html` | eFarm poultry venture coming-soon page |

## Project structure

```
├── src/                    # Page sources (edit these)
├── partials/               # Shared header, footer, fonts, scripts
├── index.html              # Built pages (generated — do not edit by hand)
├── promoters.html
├── core-values.html
├── long-term-vision.html
├── bishnupriyafuels.html
├── beautysalon.html
├── efarm-chicken.html
├── scripts/build-html.js   # Assembles src/ + partials/ → root *.html
├── css/style.css           # Shared styles
├── fonts/                  # Plus Jakarta Sans & Space Grotesk (woff2, font-display: swap in CSS)
├── js/main.js              # Mobile nav, scroll reveal, header effects
├── images/about/           # Founder and promoter photography
└── CNAME                   # Custom domain (fnsventures.in)
```

Shared chrome lives in `partials/`:

| Partial | Used on |
|---------|---------|
| `header-home.html` | `index.html` (in-page anchor nav) |
| `header-sub.html` | Most inner / coming-soon pages |
| `header-sub-about.html` | `promoters.html` (includes About link) |
| `footer-full.html` | Home, promoters, core values, long-term vision |
| `footer-minimal.html` | Coming-soon / placeholder pages |

## Local development

**Edit pages in `src/`**, then build:

```bash
npm run build
```

This writes the deployable HTML files at the project root. Serve the root with any static file server:

```bash
# Python
python3 -m http.server 8080

# Node (npx, no install)
npx --yes serve .
```

Open `http://localhost:8080` and navigate the site.

## Deployment

The site is configured for **GitHub Pages** with a custom domain via `CNAME` (`fnsventures.in`).

1. Run `npm run build` so root HTML matches `src/` and `partials/`.
2. Push changes to the repository's default branch.
3. In GitHub → **Settings → Pages**, set the source to the branch root.
4. Ensure DNS for `fnsventures.in` points to GitHub Pages.

Typography is self-hosted under `fonts/` (no third-party font requests). External assets:

- [Font Awesome 6](https://fontawesome.com/) — icons (CDN)

## Editing content

- **Copy and sections** — edit the matching file under `src/`, run `npm run build`, then commit both `src/` and the generated root `.html` files.
- **Header / footer / social links** — edit `partials/*.html`, rebuild.
- **Per-page meta (title, OG tags)** — stays in each `src/*.html` `<head>`; only fonts/CSS are shared via `partials/head-fonts.html`.
- **Styles** — `css/style.css` uses CSS custom properties in `:root` for colours, spacing, and typography.
- **Behaviour** — `js/main.js` handles the mobile menu, scroll-triggered reveal animations, and sticky header styling.

To add a page: create `src/your-page.html` with `<!-- @include partials/... -->` markers (copy an existing `src/` file as a template), run `npm run build`.

## Contact

- WhatsApp: [+91 96689 13299](https://wa.me/919668913299)
- Email: [official@fnsventures.in](mailto:official@fnsventures.in)
