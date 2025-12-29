# IngrediList Marketing Site — Codebase Overview

## Project summary

This repository is a **static, multi-page marketing + compliance site** for the IngrediList iOS app. It’s designed to be deployable to any static host (Vercel/Netlify configs included), with a strong emphasis on **accessibility, readability, and App Store compliance pages** (Support + Privacy).

## Tech stack

- **HTML**: Static pages (no framework)
- **CSS**: Shared design system in `css/styles.css`, with tokens + accessibility utilities in `css/theme.css` and typography rules in `css/typography.css`
- **JavaScript**: One small runtime helper `js/contrast-handler.js` to reinforce WCAG contrast/readability in glass surfaces
- **Hosting**: Static hosting (configs included for Netlify `netlify.toml` and Vercel `vercel.json`)

## Site map (key pages)

- `index.html`: Homepage (hero, features, workflow preview, CTAs)
- `how-it-works.html`: Detailed product workflow explanation
- `support.html`: Support + FAQ content
- `privacy.html`: Privacy Policy (includes AdMob/ATT language)
- `terms.html`: Terms of Use
- `press.html`: Press Kit page (publicly downloadable assets + “request via email” items)

## Design system

The UI is driven by **CSS variables (tokens)** and a “liquid glass” aesthetic:

- **Tokens**: `:root` tokens in `css/styles.css` and contrast tokens in `css/theme.css`
- **Responsive typography**: `css/typography.css` uses `clamp()` to scale type smoothly
- **Accessibility**:
  - Focus-visible styles
  - Reduced motion support
  - Skip link on every page

## Runtime behavior (JS)

`js/contrast-handler.js`:

- Scans text elements and, when computed contrast is below a WCAG AA threshold, applies a readability overlay class on nearby containers.
- Uses a `MutationObserver` to re-check after DOM changes.

## Assets

All shipped assets live in `assets/`. Notably:

- Icons (favicons + Apple touch icon)
- `app-icon-1024.png`
- `logo.svg`
- `video-poster.jpg` (used as the hero “media” background)
- `og-image.png`

## Deployment & routing

- **No build step** required.
- **Local preview**: `python3 -m http.server 8000` (see `package.json` scripts).
- **Clean URLs**: Hosting configs map paths like `/privacy` → `privacy.html`, but internal links in the HTML are written as explicit `.html` routes so **local preview works** without redirects.

## REVIEW notes / open items before final launch

- **App Store URL**: Several docs reference `https://apps.apple.com/app/ingredilist` as a placeholder. Replace with your final App Store listing URL when live.
- **TestFlight URL**: The TestFlight link `https://testflight.apple.com/join/ingredilist` is treated as a placeholder in docs; confirm and replace with the real invite.
- **`app-ads.txt`**: Must be populated from the AdMob console if you’re running ads. (File includes a `REVIEW:` reminder.)
- **Press assets**: The Press page is configured so missing ZIP/PDF downloads are requested via email rather than linking to non-existent files. If you want one-click downloads, add the corresponding files into `assets/` and update `press.html`.


