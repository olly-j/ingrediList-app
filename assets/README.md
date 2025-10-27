# IngrediList Assets

This directory contains brand assets, icons, and media files for the IngrediList marketing website.

## 📁 Directory Structure

```
assets/
├── favicon.svg              # Site favicon (24×24 optimized)
├── logo.svg                 # Full IngrediList logo with text
├── app-icon-1024.png        # App Store icon (add your own)
├── logo.png                 # Logo in PNG format (add your own)
├── og-image.png             # Open Graph preview image (add your own)
├── screenshots/             # Marketing screenshots (add your own)
│   ├── iphone-1.png
│   ├── iphone-2.png
│   └── iphone-3.png
├── colours.pdf              # Brand colour palette document (add your own)
└── press-kit.zip            # Complete press kit bundle (add your own)
```

## 📥 Assets to Add

The following assets are referenced in the website but need to be created:

### Required Assets

1. **App Icon** (`app-icon-1024.png`)
   - Size: 1024 × 1024 px
   - Format: PNG with transparency
   - Design: Frosted shopping bag with gradient
   - Use: App Store, press kit, website

2. **Open Graph Image** (`og-image.png`)
   - Size: 1200 × 630 px
   - Format: PNG or JPG
   - Content: App screenshot or hero image
   - Use: Social media sharing previews

3. **Screenshots** (`screenshots/`)
   - Sizes: iPhone 15 Pro (1179 × 2556 px)
   - Format: PNG
   - Content: 
     - Screenshot 1: Scanning a recipe
     - Screenshot 2: Ingredient list view
     - Screenshot 3: Apple Reminders integration
   - Use: Press kit, App Store, website

4. **Logo PNG** (`logo.png`)
   - Size: 2048 × 2048 px (with transparency)
   - Format: PNG
   - Use: Press kit, high-res usage

5. **Colour Palette PDF** (`colours.pdf`)
   - Document showing:
     - Primary Blue (#4E8BFF)
     - Light Blue (#9BC2FF)
     - Background (#F7F8FA)
     - Text Dark (#1C1C1E)
     - Subtext (#6E6E73)
   - Include HEX, RGB, and CMYK values

6. **Press Kit ZIP** (`press-kit.zip`)
   - Bundle containing:
     - All logos (SVG, PNG)
     - App icon
     - Screenshots
     - Colour palette
     - Brand guidelines PDF

## 🎨 Creating the App Icon

### Design Specifications

**Concept:** Frosted shopping bag with Liquid Glass aesthetic

**Visual Elements:**
- Semi-transparent shopping bag shape
- Soft gradient from #4E8BFF to #9BC2FF
- Subtle inner glow
- Rounded corners (standard iOS)
- Depth and layering

**Tools:**
- Figma (recommended)
- Sketch
- Adobe Illustrator
- Affinity Designer

**Export Settings:**
- 1024×1024 PNG at 72 DPI
- RGB color space
- No transparency for App Store submission
- Save separate version with transparency for web

### Quick Export Guide

From Figma/Sketch:
1. Create 1024×1024 artboard
2. Design icon with shopping bag + list elements
3. Apply blur effects and gradients
4. Export as PNG @ 2x

## 📸 Screenshot Guidelines

### Capture Settings

**Device:** iPhone 15 Pro
**Resolution:** 1179 × 2556 px
**Status Bar:** Clean (9:41, full signal)
**Format:** PNG

### Screenshot Content

1. **Hero Shot** - Recipe scanning in action
   - Show camera viewfinder
   - Recipe book in background
   - Recognition overlay

2. **List View** - Extracted ingredients
   - Clean, organized list
   - Checkboxes
   - Quantities clearly visible

3. **Integration** - Apple Reminders sync
   - Show "Add to Reminders" action
   - Success confirmation
   - Or: Reminders app with synced list

### Tools for Creating Screenshots

- **Use the iOS Simulator** (if app is not live yet)
- **Screenshot frames:** [shotsnapp.com](https://shotsnapp.com) or [mockuphone.com](https://mockuphone.com)
- **Add device frames:** Figma, Sketch, or Rotato app

## 🌐 Open Graph Image

### Specifications
- Size: 1200 × 630 px
- Format: JPG or PNG
- Max file size: < 1 MB

### Content Suggestions
- App icon + tagline: "From recipe to shopping list in seconds"
- iPhone mockup with app screenshot
- Gradient background matching brand colors
- Clean typography with SF Pro Display

### Tools
- Canva (easiest, use social media template)
- Figma (most control)
- Adobe Photoshop

## 📦 Generating Press Kit

Once all assets are ready:

```bash
# Create press-kit directory
mkdir press-kit
cd press-kit

# Copy assets
cp ../logo.svg ./
cp ../logo.png ./
cp ../app-icon-1024.png ./
cp -r ../screenshots ./

# Create ZIP
zip -r ../press-kit.zip .
```

## 🎨 Brand Colors (Reference)

| Color Name    | HEX     | RGB             | Usage              |
|---------------|---------|-----------------|-------------------|
| Primary Blue  | #4E8BFF | 78, 139, 255    | CTAs, accents     |
| Light Blue    | #9BC2FF | 155, 194, 255   | Gradients         |
| Background    | #F7F8FA | 247, 248, 250   | Page background   |
| Text Dark     | #1C1C1E | 28, 28, 30      | Body text         |
| Subtext       | #6E6E73 | 110, 110, 115   | Secondary text    |

## 📄 Placeholder Assets

Current status:
- ✅ `favicon.svg` - Created
- ✅ `logo.svg` - Created
- ❌ `app-icon-1024.png` - **Needs creation**
- ❌ `logo.png` - **Needs creation**
- ❌ `og-image.png` - **Needs creation**
- ❌ `screenshots/` - **Needs creation**
- ❌ `colours.pdf` - **Needs creation**
- ❌ `press-kit.zip` - **Needs creation**

## 🚀 Next Steps

1. Design and export app icon (1024×1024)
2. Capture or create 3 app screenshots
3. Generate Open Graph image for social sharing
4. Create colour palette PDF
5. Bundle all assets into press-kit.zip
6. Update website with real assets
7. Test social media previews

## 📞 Need Help?

If you need assistance creating assets:
- **Design tools:** Figma, Canva (free tier)
- **Mockup tools:** Shotsnapp, MockuPhone
- **Icon design:** Consider hiring on Fiverr or Dribbble

---

**Note:** All current SVG assets are production-ready. PNG/raster assets marked with ❌ should be created before launch.

