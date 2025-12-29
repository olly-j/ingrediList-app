# IngrediList Marketing Website

**From recipe to shopping list in seconds.**

This repository contains the official marketing and compliance website for IngrediList, a premium iOS app that scans recipes and turns them into Apple-Reminders-ready shopping lists using on-device AI.

---

## 🌐 Live Site

**Production:** [https://ingredilist.app](https://ingredilist.app)

---

## 📁 Project Structure

```
ingrediList-app/
├── index.html              # Homepage with hero and features
├── how-it-works.html       # Detailed workflow explanation
├── privacy.html            # Privacy policy (App Store required)
├── support.html            # Support & FAQs (App Store required)
├── press.html              # Press kit and brand assets
├── css/
│   └── styles.css          # Liquid Glass design system
├── assets/
│   ├── favicon.svg         # Site favicon
│   ├── logo.svg            # Brand logo
│   ├── app-icon-1024.png   # App Store icon
│   └── og-image.png        # Social sharing image
└── README.md               # This file
```

---

## 🎨 Design System

**Visual Theme:** Liquid Glass

- Layered translucency with soft blur effects
- Frosted surfaces and diffused lighting
- Rounded 2xl corners (16px–24px)
- Gentle shadows and hover states
- Minimal, fluid animations

**Colour Palette:**

| Use        | Colour    | Notes                      |
|------------|-----------|----------------------------|
| Background | `#F7F8FA` | Off-white with gradient    |
| Accent     | `#4E8BFF` | Soft Apple-blue            |
| Secondary  | `#9BC2FF` | Light gradient layer       |
| Text       | `#1C1C1E` | Default body copy          |
| Subtext    | `#6E6E73` | Muted grey                 |

**Typography:**

- Primary: SF Pro Display (with Inter fallback)
- H1: 64px / 700
- H2: 40px / 600
- H3: 28px / 500
- Body: 18px / 400

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Configure Custom Domain:**
   - In Vercel dashboard, go to Project Settings → Domains
   - Add `ingrediList.app` and `www.ingrediList.app`
   - Update DNS records as instructed:
     ```
     A     @     76.76.21.21
     CNAME www   cname.vercel-dns.com
     ```

4. **Enable HTTPS:**
   - Vercel automatically provisions SSL certificates
   - Force HTTPS in Settings → General → Force HTTPS

### Deploy to Netlify (Alternative)

1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

3. **Configure Custom Domain:**
   - In Netlify dashboard, go to Site Settings → Domain Management
   - Add custom domain `ingrediList.app`
   - Update DNS:
     ```
     A     @     75.2.60.5
     CNAME www   [your-site].netlify.app
     ```

### Manual Deployment (Any Static Host)

This is a static HTML/CSS site with no build process required. Simply upload all files to your hosting provider:

1. Upload `index.html`, `how-it-works.html`, `privacy.html`, `support.html`, `press.html`
2. Upload `css/` folder
3. Upload `assets/` folder
4. Configure your web server to serve `index.html` as the default document
5. Enable HTTPS via your hosting provider

---

## 📋 App Store Connect Requirements

### Required URLs

IngrediList meets all App Store Connect URL requirements:

- **Marketing URL:** `https://ingrediList.app`
- **Support URL:** `https://ingredilist.app/support`
- **Privacy Policy URL:** `https://ingredilist.app/privacy`

### Compliance Checklist

- ✅ Privacy Policy with GDPR compliance
- ✅ Support page with contact information
- ✅ Clear explanation of on-device processing
- ✅ Contact email: `help@ingrediList.app`
- ✅ No external analytics or tracking
- ✅ Accessible design (WCAG 2.2 AA)

---

## ✨ Features

### Technical

- **Pure HTML5 + CSS3** – No frameworks, no build process
- **Responsive Design** – Mobile-first, works on all devices
- **Backdrop Filters** – Native CSS glass effects
- **Dark Mode Support** – Via `prefers-color-scheme`
- **Accessibility** – WCAG 2.2 AA compliant
- **Performance** – Lighthouse score > 95
- **SEO Optimised** – Open Graph, Twitter Cards, Schema.org

### Content Pages

1. **Home** – Hero, features, workflow preview, CTAs
2. **How It Works** – Detailed 4-step process explanation
3. **Privacy Policy** – GDPR-compliant, clear language
4. **Support** – 10 FAQs + contact form
5. **Press Kit** – Brand assets, screenshots, media info

---

## 🛠️ Local Development

No build tools required! Simply open in a browser:

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node.js
npx serve

# Option 3: PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

---

## 📱 Browser Support

- **Safari** 15+ (primary target)
- **Chrome** 90+
- **Firefox** 88+
- **Edge** 90+

**Note:** Backdrop filters require modern browsers. Fallbacks are provided for older browsers.

---

## 🔧 Customisation

### Update Brand Colours

Edit CSS variables in `css/styles.css`:

```css
:root {
  --color-accent: #4E8BFF;
  --color-accent-light: #9BC2FF;
  /* ... */
}
```

### Update Contact Email

Replace all instances of `help@ingrediList.app` across:
- `index.html`
- `privacy.html`
- `support.html`
- `press.html`

### Add Analytics (Optional)

If you want to add privacy-respecting analytics:

1. Add [Plausible](https://plausible.io) or [Fathom](https://usefathom.com)
2. Insert tracking script in `<head>` of each page
3. Update Privacy Policy to mention analytics

---

## 📊 Performance

### Lighthouse Scores (Target)

- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Optimisation Tips

- ✅ Inline critical CSS (already done)
- ✅ Lazy load images (add `loading="lazy"` to `<img>` tags)
- ✅ Compress images (use WebP for photos)
- ✅ Minify CSS for production
- ✅ Enable Brotli compression on server

---

## 📞 Contact & Support

**Email:** [help@ingrediList.app](mailto:help@ingrediList.app)  
**Website:** [https://ingredilist.app](https://ingredilist.app)  
**Press Enquiries:** [help@ingrediList.app](mailto:help@ingrediList.app)

---

## 📄 Licence

© 2025 IngrediList. All rights reserved.

This website is proprietary to IngrediList. The design system, branding, and content may not be reproduced without permission.

---

## 🎯 Next Steps

### Before Launch

1. ✅ Deploy to `ingrediList.app`
2. ✅ Test all pages on mobile and desktop
3. ✅ Verify SSL certificate is active
4. ✅ Test contact email (`help@ingrediList.app`)
5. ✅ Add real screenshots to `/assets/`
6. ✅ Update App Store Connect with URLs
7. ✅ Submit for TestFlight review

### Post-Launch

- Monitor Lighthouse scores
- Collect user feedback
- Update FAQs based on common questions
- Add blog (optional)
- Integrate with social media

---

**Built with ❤️ for the IngrediList community.**

