const fs = require('fs');
const path = require('path');

const filePath = '/Users/apple/my 2nd portfolio/src/components/sections/HeroSection.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Change duration 0.8 to 0.4 for snappier animations
content = content.replace(/duration: 0\.8/g, 'duration: 0.4');

fs.writeFileSync(filePath, content);
console.log('Updated speed in HeroSection.tsx');
