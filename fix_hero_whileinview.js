const fs = require('fs');
const path = require('path');

const filePath = '/Users/apple/my 2nd portfolio/src/components/sections/HeroSection.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace `animate={{ opacity: 1, x: 0 }}` with `whileInView={{ opacity: 1, x: 0 }}`
// and add `viewport={{ once: false, margin: "-50px" }}` right after it.
content = content.replace(/animate=\{\{\s*opacity:\s*1,\s*x:\s*0\s*\}\}/g, 
  'whileInView={{ opacity: 1, x: 0 }}\n            viewport={{ once: false, margin: "-50px" }}');

// Replace the right column portrait `animate={{ opacity: 1, x: 0, scale: 1 }}`
content = content.replace(/animate=\{\{\s*opacity:\s*1,\s*x:\s*0,\s*scale:\s*1\s*\}\}/g, 
  'whileInView={{ opacity: 1, x: 0, scale: 1 }}\n          viewport={{ once: false, margin: "-50px" }}');

fs.writeFileSync(filePath, content);
console.log('Updated HeroSection to use whileInView');
