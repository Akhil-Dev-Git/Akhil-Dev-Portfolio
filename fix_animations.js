const fs = require('fs');
const path = require('path');

const sectionsDir = '/Users/apple/my 2nd portfolio/src/components/sections';
const files = [
  'AboutSection.tsx',
  'SkillsSection.tsx',
  'ProcessSection.tsx',
  'ServicesSection.tsx',
  'ProjectsSection.tsx',
  'ContactSection.tsx'
];

files.forEach(file => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace viewport with amount -> viewport with margin
  content = content.replace(/viewport=\{\{ once: false, amount: 0\.[12] \}\}/g, 'viewport={{ once: false, margin: "-50px" }}');
  
  // To ensure smooth transitions and avoid exit-delay blinking,
  // we can enhance transition objects or add them if they don't exist.
  // Actually, just fixing viewport margin to -50px usually fixes the abrupt disappearance blink.
  
  // Let's also remove `amount: 0.2` if it's there.
  
  // And let's fix any `margin: "-100px"` to `margin: "-50px"`
  content = content.replace(/margin: "-100px"/g, 'margin: "-50px"');

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
