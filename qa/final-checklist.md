# IngrediList Marketing Site — Final QA Checklist

## Scope

This checklist covers the static marketing + compliance site pages:
`index.html`, `how-it-works.html`, `support.html`, `privacy.html`, `terms.html`, `press.html`

## Automated checks (repo-local)

- [x] **No broken local links** (`href`/`src` that point to missing files) — ✅ Verified
- [x] **No placeholder CTAs** (e.g. `href="#"`) in visible UI — ✅ Verified
- [x] **No missing referenced media** (e.g. hero video referenced but not present) — ✅ Verified

## Manual checks (browser)

### Navigation & routing

- [ ] **Navigation works on desktop** (all top-nav links)
- [ ] **Navigation works on mobile** (no overlap; tap targets >= 48px)
- [ ] **Footer links work** on every page
- [ ] **Direct loads**:
  - [ ] `/` (home)
  - [ ] `/how-it-works.html`
  - [ ] `/support.html`
  - [ ] `/privacy.html`
  - [ ] `/terms.html`
  - [ ] `/press.html`
- [ ] **Clean URL redirects work in production** (host-level):
  - [ ] `/privacy` → `/privacy.html`
  - [ ] `/support` → `/support.html`
  - [ ] `/terms` → `/terms.html`
  - [ ] `/press` → `/press.html`
  - [ ] `/how-it-works` → `/how-it-works.html`

### Accessibility

- [ ] **Keyboard navigation**: tab order is logical; focus ring is always visible
- [ ] **Skip link** works (jumps to main content) on every page
- [ ] **Headings**: single `h1` per page; hierarchy is sensible
- [ ] **Color contrast**: text remains readable in glass surfaces (light + dark mode)
- [ ] **Reduced motion**: animations/transitions reduce when `prefers-reduced-motion` is enabled

### SEO / social

- [ ] **Unique `<title>`** on every page
- [ ] **Meta description** present on every page
- [ ] **Canonical URL** present and correct on every page
- [ ] **Open Graph** tags render correct previews for key pages (Home/Privacy/Support)

### Content completeness

- [ ] **No “lorem ipsum” / placeholder sections** in visible content
- [ ] **Press downloads**: every button either downloads an existing asset or is a “request via email” link
- [ ] **App Store / TestFlight CTAs**: confirm URLs are correct before launch (or intentionally “coming soon”)

### Performance / UX

- [ ] **Hero loads quickly** (no missing media causing errors/spinners)
- [ ] **Images have dimensions** where appropriate (avoid layout shift)
- [ ] **Dark mode** looks polished (system preference)

## Final release blockers (must resolve before launch)

- [ ] **Populate `app-ads.txt`** with the exact AdMob-provided entry (if ads are enabled)
- [ ] **Confirm TestFlight invite link**
- [ ] **Replace App Store placeholder URL** with final listing when available (or keep disabled “coming soon” CTA intentionally)


