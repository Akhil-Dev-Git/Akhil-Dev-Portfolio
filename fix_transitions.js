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

  // Replace missing transitions
  // Find all viewport={{ once: false, margin: "-50px" }}
  // If the next line doesn't have transition={{, add a default one.
  content = content.replace(/viewport=\{\{ once: false, margin: "-50px" \}\}(\s*)className/g, 
    'viewport={{ once: false, margin: "-50px" }}\n            transition={{ duration: 0.8, ease: "easeOut" }}$1className');

  // For existing transitions like transition={{ delay: 0.1 }}
  content = content.replace(/transition=\{\{\s*delay:\s*([^ }]+)\s*\}\}/g, 'transition={{ duration: 0.8, ease: "easeOut", delay: $1 }}');

  fs.writeFileSync(filePath, content);
  console.log(`Updated transitions in ${file}`);
});
