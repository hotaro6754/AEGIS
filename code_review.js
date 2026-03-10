const fs = require('fs');
const path = require('path');

const filesToReview = [
  'src/app/page.tsx',
  'src/components/sections/Hero.tsx',
  'src/components/sections/Trust.tsx',
  'src/components/sections/Architecture.tsx',
  'src/components/sections/Problem.tsx',
  'src/components/sections/Capabilities.tsx',
  'src/components/sections/Pricing.tsx',
  'src/components/sections/Download.tsx',
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/ui/Logo.tsx',
  'README.md'
];

console.log("Checking for common issues in modified files...");

filesToReview.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');

    // Check for "AnimatePresence" without import (common error)
    if (content.includes('<AnimatePresence') && !content.includes('import { AnimatePresence')) {
      if (!content.includes('import {') || !content.includes('AnimatePresence } from "framer-motion"')) {
         console.log(`[ISSUE] ${file}: Potential missing AnimatePresence import.`);
      }
    }

    // Check for hardcoded absolute URLs that should be relative
    if (content.includes('http://localhost:3000')) {
       console.log(`[ISSUE] ${file}: Contains localhost URL.`);
    }

    // Check for spelling in common words
    const spellingErrors = ["annaly", "investegated", "architechure", "commpliance"];
    spellingErrors.forEach(err => {
      if (content.toLowerCase().includes(err)) {
        console.log(`[ISSUE] ${file}: Potential spelling error "${err}".`);
      }
    });
  }
});

console.log("Review complete.");
