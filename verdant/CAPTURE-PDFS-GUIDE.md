# 📄 PDF Capture Guide for Verdant

This guide explains how to capture all your Verdant website pages as PDF files.

## ✅ Setup Complete

Everything is already set up! Here's what was added:

- ✓ `scripts/capture-pdfs.js` - The PDF capture script
- ✓ `puppeteer` package installed
- ✓ `pdfs/` folder added to `.gitignore`
- ✓ `npm run capture-pdfs` script added

## 🚀 How to Use

### Step 1: Start Your Development Server

In your current terminal, run:

```bash
npm run dev
```

Wait for the server to start (should show "Ready on http://localhost:3000")

### Step 2: Capture PDFs

Open a **new terminal window** (keep the dev server running) and run:

```bash
npm run capture-pdfs
```

Or alternatively:

```bash
node scripts/capture-pdfs.js
```

### Step 3: Find Your PDFs

PDFs will be saved in a new `pdfs/` folder:

```
pdfs/
├── home.pdf
├── book-demo.pdf
├── who-we-are.pdf
├── our-values.pdf
├── team-roadmap.pdf
├── product.pdf
└── products-detail.pdf
```

## 📋 What Gets Captured

The script automatically captures:

- **Home page** (`/`)
- **Book Demo** (`/book-demo`)
- **Who We Are** (`/who-we-are`)
- **Our Values** (`/our-values`)
- **Team Roadmap** (`/team-roadmap`)
- **Product** (`/product`)
- **Products Detail** (`/products-detail`)

## ⚙️ Configuration

The script is configured with:

- **Format:** A4 size
- **Resolution:** High (2x device scale factor)
- **Margins:** None (full-page)
- **Background:** Enabled (captures all your designs)
- **Wait time:** 3 seconds per page (for 3D models to load)

## ⚠️ Important Notes

### 3D Models

PDFs may not perfectly capture your Three.js 3D models because they use WebGL, which doesn't translate well to PDF format. For the best results with 3D content:

- Use the PDFs for general layout/design review
- Take screenshots for presentation materials where 3D models need to be visible
- Consider increasing the wait time in `scripts/capture-pdfs.js` (line 41) if models aren't loading

### Scrollable Pages

For long scrollable pages (like Team Roadmap and Who We Are), the PDF will capture the full page height automatically.

## 🛠️ Troubleshooting

**Error: "Cannot find module 'puppeteer'"**
```bash
npm install
```

**Error: "Connection refused" or timeout**
- Make sure dev server is running: `npm run dev`
- Check it's running on port 3000
- Try increasing timeout in script (line 35)

**3D models not showing**
- Increase wait time in `scripts/capture-pdfs.js` (change line 41 from 3000 to 5000)
- Consider using screenshot tools instead for WebGL content

**Want to capture from deployed site?**

Edit `scripts/capture-pdfs.js` and change the base URLs:

```javascript
const pages = [
  { url: 'https://your-site.vercel.app/', name: 'home' },
  { url: 'https://your-site.vercel.app/book-demo', name: 'book-demo' },
  // ... etc
];
```

## 🎯 Next Steps

After capturing PDFs:

1. Review them in the `pdfs/` folder
2. These files won't be committed to git (they're in `.gitignore`)
3. Your website files remain untouched and ready for deployment
4. You can run the script again anytime to get fresh PDFs

## 📦 What Was NOT Changed

✅ **No webpage files were modified**
✅ **Your website is ready to deploy**
✅ **All PDF tools are separate utilities**

The only changes were:
- Added script files in `scripts/` folder
- Added `puppeteer` to `devDependencies`
- Added `pdfs/` to `.gitignore`
- Added convenience npm script

Happy PDF capturing! 🎉

