# IngrediList Quick Start Guide

Get your IngrediList marketing website live in 5 minutes.

---

## ⚡ Fastest Deployment (Vercel)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Navigate to project
cd /Users/oliverjeffers/Documents/GitHub/ingrediList-app

# 3. Deploy
vercel

# Follow prompts:
# - Login to Vercel
# - Link to existing project or create new
# - Deploy!

# 4. Deploy to production
vercel --prod
```

**Done!** Your site is live at the generated URL. Add custom domain in Vercel dashboard.

---

## 🖥️ Local Preview

Test the site locally before deploying:

### Option 1: Python (Easiest)
```bash
cd /Users/oliverjeffers/Documents/GitHub/ingrediList-app
python3 -m http.server 8000
```
Open: http://localhost:8000

### Option 2: Node.js
```bash
npx serve
```
Open: http://localhost:3000

---

## 📋 Pre-Launch Checklist

Before going live, ensure:

- [ ] All HTML pages load correctly
- [ ] Navigation links work
- [ ] Footer displays on all pages
- [ ] Mobile responsive (test on iPhone)
- [ ] Email link works: `help@ingrediList.app`
- [ ] Test dark mode (if supported by browser)
- [ ] Favicon displays in browser tab

---

## 🎨 Customize Before Launch

### 1. Update Contact Email
Replace `help@ingrediList.app` in:
- `index.html`
- `how-it-works.html`
- `privacy.html`
- `support.html`
- `press.html`

### 2. Add Real App Store Links
Once your app is live, replace placeholder links:

Search for: `https://apps.apple.com/app/ingredilist`  
Replace with: Your actual App Store URL

Search for: `https://testflight.apple.com/join/ingredilist`  
Replace with: Your TestFlight invite link

### 3. Add Real Assets
See `assets/README.md` for required assets:
- App icon (1024×1024 PNG)
- Screenshots
- Open Graph image

---

## 🚀 Deploy Options Summary

| Platform   | Speed | Difficulty | SSL | Custom Domain |
|------------|-------|------------|-----|---------------|
| **Vercel** | ⚡⚡⚡  | ⭐         | ✅  | ✅            |
| **Netlify**| ⚡⚡⚡  | ⭐         | ✅  | ✅            |
| Cloudflare | ⚡⚡    | ⭐⭐       | ✅  | ✅            |
| cPanel/FTP | ⚡     | ⭐⭐⭐     | 🔧  | ✅            |

**Recommendation:** Use Vercel or Netlify for zero-config deployment.

---

## 🔧 Quick Commands Reference

```bash
# View project structure
ls -la

# Start local server
python3 -m http.server 8000

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod

# Check for broken links (requires npm package)
npx broken-link-checker http://localhost:8000
```

---

## 📱 Test on Mobile

After deploying:

1. Open Safari on iPhone
2. Navigate to `https://ingredilist.app`
3. Test all pages and interactions
4. Add to Home Screen (tests icon)
5. Check in both light and dark mode

---

## 🎯 Next Steps After Launch

1. **App Store Connect:**
   - Add Support URL: `https://ingredilist.app/support.html`
   - Add Privacy URL: `https://ingredilist.app/privacy.html`
   - Add Marketing URL: `https://ingredilist.app`

2. **Social Media:**
   - Share on Twitter/X
   - Post to Product Hunt
   - Share in iOS development communities

3. **Monitor:**
   - Set up Plausible or Fathom (optional analytics)
   - Configure uptime monitoring
   - Track App Store metrics

---

## ❓ Common Issues

**CSS not loading?**
→ Check file paths in HTML (`css/styles.css` not `/css/styles.css`)

**Favicon not showing?**
→ Clear browser cache or hard refresh (Cmd+Shift+R)

**HTTPS not working?**
→ Wait 5-10 minutes for DNS propagation

**Glass effects not rendering?**
→ Test in Safari or Chrome (requires modern browser)

---

## 📞 Need Help?

- **Documentation:** See `README.md` and `DEPLOYMENT.md`
- **Support:** help@ingrediList.app
- **Issues:** Check hosting provider's status page

---

## 🎉 Launch!

Once everything is tested and verified:

```bash
# Final production deploy
vercel --prod

# Or
netlify deploy --prod
```

**Congratulations!** Your IngrediList website is live. 🚀

---

## 📊 Recommended Tools

### Analytics (Privacy-Friendly)
- [Plausible](https://plausible.io) - €9/month
- [Fathom](https://usefathom.com) - $14/month
- [Simple Analytics](https://simpleanalytics.com) - €19/month

### Monitoring
- [UptimeRobot](https://uptimerobot.com) - Free tier available
- [Pingdom](https://www.pingdom.com)

### Performance
- [PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)

---

**Built with care for IngrediList. Good luck with your launch! 🎊**

