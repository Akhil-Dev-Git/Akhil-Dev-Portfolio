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

  // Change duration 0.8 to 0.4 for snappier animations
  content = content.replace(/duration: 0\.8/g, 'duration: 0.4');

  // Reduce delay multipliers for faster cascading (e.g. index * 0.1 -> index * 0.05)
  content = content.replace(/delay: index \* 0\.1/g, 'delay: index * 0.05');
  content = content.replace(/delay: \(index % 5\) \* 0\.1/g, 'delay: (index % 5) * 0.05');
  content = content.replace(/delay: idx \* 0\.1/g, 'delay: idx * 0.05');

  fs.writeFileSync(filePath, content);
  console.log(`Updated speed in ${file}`);
});
