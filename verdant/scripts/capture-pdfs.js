const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Pages to capture
const pages = [
  { url: 'http://localhost:3000/', name: 'home' },
  { url: 'http://localhost:3000/book-demo', name: 'book-demo' },
  { url: 'http://localhost:3000/who-we-are', name: 'who-we-are' },
  { url: 'http://localhost:3000/our-values', name: 'our-values' },
  { url: 'http://localhost:3000/team-roadmap', name: 'team-roadmap' },
  { url: 'http://localhost:3000/product', name: 'product' },
  { url: 'http://localhost:3000/products-detail', name: 'products-detail' }
];

(async () => {
  console.log('🚀 Starting PDF capture...\n');
  
  // Create pdfs directory if it doesn't exist
  const pdfDir = path.join(__dirname, '..', 'pdfs');
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir);
    console.log('📁 Created pdfs directory\n');
  }
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  console.log('🌐 Browser launched\n');
  
  for (const page of pages) {
    try {
      console.log(`📄 Capturing: ${page.name}...`);
      const browserPage = await browser.newPage();
      
      // Set viewport for consistent rendering
      await browserPage.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 2
      });
      
      // Navigate to page
      await browserPage.goto(page.url, { 
        waitUntil: 'networkidle0',
        timeout: 30000
      });
      
      // Wait a bit extra for 3D models to load
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Save as PDF
      await browserPage.pdf({
        path: path.join(pdfDir, `${page.name}.pdf`),
        format: 'A4',
        printBackground: true,
        margin: { 
          top: '0mm', 
          right: '0mm', 
          bottom: '0mm', 
          left: '0mm' 
        },
        preferCSSPageSize: false
      });
      
      console.log(`   ✓ Saved: pdfs/${page.name}.pdf`);
      await browserPage.close();
      
    } catch (error) {
      console.error(`   ✗ Error capturing ${page.name}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('\n✨ All pages captured successfully!');
  console.log(`📂 PDFs saved in: ${pdfDir}`);
})();

