# IngrediList Deployment Guide

Complete guide to deploying the IngrediList marketing website to production.

---

## 🚀 Quick Deploy (Vercel - Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier works)
- Domain: `ingrediList.app`

### Steps

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: IngrediList marketing site"
   git branch -M main
   git remote add origin https://github.com/your-username/ingredilist-app.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the static site
   - Click "Deploy"

3. **Configure Custom Domain:**
   - In Vercel dashboard: Project → Settings → Domains
   - Add `ingredilist.app` and `www.ingredilist.app`
   - Update DNS records at your registrar:
     ```
     Type  Name  Value
     A     @     76.76.21.21
     CNAME www   cname.vercel-dns.com
     ```
   - Wait 5-10 minutes for DNS propagation
   - Vercel will automatically provision SSL

4. **Verify Deployment:**
   - Visit `https://ingredilist.app`
   - Test all pages: home, how-it-works, privacy, support, press
   - Check mobile responsiveness
   - Run Lighthouse audit (target: 95+)

---

## 🌊 Deploy to Netlify (Alternative)

### Steps

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

4. **Configure Domain:**
   - Netlify dashboard → Domain Settings
   - Add custom domain `ingredilist.app`
   - Update DNS:
     ```
     A     @     75.2.60.5
     CNAME www   [your-site].netlify.app
     ```

5. **Enable HTTPS:**
   - Netlify auto-provisions Let's Encrypt SSL
   - Force HTTPS in Settings → HTTPS

---

## 📦 Deploy to CloudFlare Pages

1. **Connect GitHub:**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Click "Create a project"
   - Connect your GitHub repository

2. **Build Settings:**
   - Build command: (leave blank)
   - Build output directory: `/`
   - Root directory: `/`

3. **Deploy:**
   - Click "Save and Deploy"
   - CloudFlare will build and deploy automatically

4. **Custom Domain:**
   - Pages → Custom domains
   - Add `ingredilist.app`
   - CloudFlare will handle DNS if you're using their nameservers

---

## 🖥️ Deploy to Traditional Hosting (cPanel/FTP)

### For Shared Hosting (Bluehost, SiteGround, etc.)

1. **Connect via FTP:**
   - Use FileZilla, Cyberduck, or cPanel File Manager
   - Connect to your hosting account

2. **Upload Files:**
   - Navigate to `public_html/` (or `www/`)
   - Upload all files:
     - `index.html`
     - `how-it-works.html`
     - `privacy.html`
     - `support.html`
     - `press.html`
     - `/css/` folder
     - `/assets/` folder

3. **Configure HTTPS:**
   - In cPanel → SSL/TLS Status
   - Run AutoSSL for `ingredilist.app`
   - Or use Let's Encrypt if available

4. **Test:**
   - Visit `https://ingredilist.app`
   - Ensure all pages load correctly

---

## 🔧 Local Testing Before Deployment

### Option 1: Python Server
```bash
cd /path/to/ingrediList-app
python3 -m http.server 8000
```
Visit: `http://localhost:8000`

### Option 2: Node.js Server
```bash
npx serve
```
Visit: `http://localhost:3000`

### Option 3: PHP Server
```bash
php -S localhost:8000
```

---

## ✅ Post-Deployment Checklist

### Functional Testing
- [ ] Homepage loads correctly
- [ ] All internal links work
- [ ] Navigation is functional on mobile
- [ ] Footer links work
- [ ] Email links open mail client (`mailto:help@ingrediList.app`)
- [ ] Glass effects render correctly
- [ ] Dark mode switches properly (if user has dark mode enabled)

### SEO & Metadata
- [ ] Open Graph tags display correctly (test with [opengraph.xyz](https://www.opengraph.xyz))
- [ ] Twitter Card preview works (test with [cards-dev.twitter.com](https://cards-dev.twitter.com/validator))
- [ ] Favicon displays in browser tab
- [ ] Page titles are unique and descriptive
- [ ] Meta descriptions are present

### Performance
- [ ] Run Lighthouse audit (target: Performance 95+, Accessibility 100)
- [ ] Test page load speed (target: < 2s on 4G)
- [ ] Images are compressed (use [TinyPNG](https://tinypng.com))
- [ ] CSS is minified (optional, use [cssnano](https://cssnano.co))

### Security
- [ ] HTTPS is enabled and forced
- [ ] Security headers are present (test with [securityheaders.com](https://securityheaders.com))
- [ ] No mixed content warnings
- [ ] CSP headers configured (optional)

### App Store Connect
- [ ] Add Support URL: `https://ingredilist.app/support.html`
- [ ] Add Privacy Policy URL: `https://ingredilist.app/privacy.html`
- [ ] Add Marketing URL: `https://ingredilist.app`
- [ ] Verify all three URLs are accessible

### Email Setup
- [ ] Email `help@ingrediList.app` is set up and receiving
- [ ] Auto-reply configured (optional)
- [ ] Test contact form by sending an email

---

## 🌐 DNS Configuration Reference

### Vercel DNS
```
Type  Name  Value                   TTL
A     @     76.76.21.21            Auto
CNAME www   cname.vercel-dns.com   Auto
```

### Netlify DNS
```
Type  Name  Value                      TTL
A     @     75.2.60.5                 3600
CNAME www   [your-site].netlify.app   3600
```

### CloudFlare DNS
```
Type  Name  Value                        Proxy
A     @     [CloudFlare-assigned-IP]    Yes
CNAME www   ingredilist.app             Yes
```

---

## 🔍 Monitoring & Analytics (Optional)

### Privacy-Friendly Analytics

If you want to track visitors while respecting privacy:

1. **Plausible Analytics** (Recommended)
   - Go to [plausible.io](https://plausible.io)
   - Add site: `ingredilist.app`
   - Add script to `<head>` of each HTML file:
     ```html
     <script defer data-domain="ingredilist.app" src="https://plausible.io/js/script.js"></script>
     ```
   - Update Privacy Policy to mention analytics

2. **Fathom Analytics**
   - Go to [usefathom.com](https://usefathom.com)
   - Add tracking code
   - GDPR compliant, no cookies

3. **Simple Analytics**
   - Go to [simpleanalytics.com](https://simpleanalytics.com)
   - Add tracking script

---

## 🛠️ Troubleshooting

### Issue: CSS not loading
**Solution:** Check file paths are correct:
```html
<link rel="stylesheet" href="css/styles.css">
<!-- NOT /css/styles.css if deploying to root -->
```

### Issue: Favicon not showing
**Solution:** Clear browser cache or use:
```html
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg?v=2">
```

### Issue: HTTPS redirects not working
**Solution:** Check hosting panel for "Force HTTPS" option, or add to `.htaccess`:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Issue: Glass effects not rendering
**Solution:** Backdrop filters require modern browsers. Check browser support or add fallback:
```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}
@supports not (backdrop-filter: blur(18px)) {
  .glass-card {
    background: rgba(255, 255, 255, 0.95);
  }
}
```

### Issue: Slow page load
**Solutions:**
- Compress images (WebP format)
- Minify CSS
- Enable Brotli compression on server
- Use a CDN (Cloudflare)

---

## 📈 Optimization Tips

### Image Optimization
```bash
# Convert PNG to WebP
cwebp input.png -q 80 -o output.webp

# Compress PNG
pngquant input.png --output output.png
```

### CSS Minification
```bash
# Using cssnano
npx cssnano css/styles.css css/styles.min.css
```

Then update HTML:
```html
<link rel="stylesheet" href="css/styles.min.css">
```

### Enable Brotli (Nginx)
```nginx
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/json application/javascript text/xml application/xml;
```

---

## 🎯 Going Live Checklist

**Final steps before announcing:**

1. **Deployment:**
   - [ ] Site is live at `https://ingredilist.app`
   - [ ] SSL certificate is active (green padlock)
   - [ ] www redirects to non-www (or vice versa)

2. **Content:**
   - [ ] All placeholder text replaced with real content
   - [ ] Screenshots added to `/assets/`
   - [ ] App Store links updated (when app is live)
   - [ ] TestFlight link is working

3. **Testing:**
   - [ ] Test on iPhone (Safari)
   - [ ] Test on Android (Chrome)
   - [ ] Test on Desktop (Chrome, Safari, Firefox)
   - [ ] Test with screen reader for accessibility
   - [ ] Test all email links

4. **App Store:**
   - [ ] Support URL added to App Store Connect
   - [ ] Privacy Policy URL added to App Store Connect
   - [ ] Marketing URL added to App Store Connect

5. **Monitoring:**
   - [ ] Analytics installed (if desired)
   - [ ] Uptime monitoring configured (UptimeRobot, Pingdom)
   - [ ] Email forwarding working

6. **Announce:**
   - [ ] Share on social media
   - [ ] Submit to Product Hunt (optional)
   - [ ] Reach out to tech press with press kit
   - [ ] Post in iOS/app development communities

---

## 📞 Support

If you encounter issues during deployment:
- **Email:** help@ingrediList.app
- **Documentation:** See README.md
- **Hosting Support:** Contact your hosting provider's support team

---

**Deployment Complete!** 🎉

Your IngrediList marketing site is now live and ready to support your App Store launch.

