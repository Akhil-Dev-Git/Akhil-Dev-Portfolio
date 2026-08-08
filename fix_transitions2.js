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

  // Regex to match transition={{ delay: something }}
  content = content.replace(/transition=\{\{\s*delay:\s*([^}]+)\s*\}\}/g, (match, p1) => {
    // Check if it already has duration
    if (match.includes('duration')) return match;
    return `transition={{ duration: 0.8, ease: "easeOut", delay: ${p1.trim()} }}`;
  });

  fs.writeFileSync(filePath, content);
  console.log(`Updated missing transitions in ${file}`);
});
