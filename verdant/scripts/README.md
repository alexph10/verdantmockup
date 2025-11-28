# PDF Capture Scripts

This directory contains scripts for capturing your Verdant website pages as PDFs.

## Setup

1. Install Puppeteer (if not already installed):
```bash
npm install --save-dev puppeteer
```

2. Make sure your development server is running:
```bash
npm run dev
```

## Usage

In a **separate terminal** (while dev server is running):

```bash
node scripts/capture-pdfs.js
```

## Output

PDFs will be saved in the `pdfs/` directory at the root of your project:

- `pdfs/home.pdf`
- `pdfs/book-demo.pdf`
- `pdfs/who-we-are.pdf`
- `pdfs/our-values.pdf`
- `pdfs/team-roadmap.pdf`
- `pdfs/product.pdf`
- `pdfs/products-detail.pdf`

## Notes

- The script waits 3 seconds on each page to allow 3D models to load
- PDFs are generated at A4 size with no margins
- Background graphics are included
- High resolution (2x device scale factor)

## Troubleshooting

**"Cannot find module 'puppeteer'"**
- Run: `npm install --save-dev puppeteer`

**"Connection refused" or timeout errors**
- Make sure your dev server is running on `http://localhost:3000`
- Check that the port hasn't changed

**3D models not appearing in PDFs**
- PDFs may not capture WebGL/Three.js content perfectly
- Consider using screenshot tools for pages with 3D models
- Alternatively, increase the wait time in the script (line 41)

