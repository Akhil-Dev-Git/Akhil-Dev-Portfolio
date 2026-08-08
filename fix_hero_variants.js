const fs = require('fs');
const path = require('path');

const filePath = '/Users/apple/my 2nd portfolio/src/components/sections/HeroSection.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// We will replace the left column items with a staggered container
// Or simpler, just use variants with custom props on each motion.div

const replacement = `
const leftVariants = {
  hidden: { opacity: 0, x: -200, transition: { duration: 0.4, ease: "easeOut" } },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" }
  })
};

const rightVariants = {
  hidden: { opacity: 0, x: 200, scale: 0.9, transition: { duration: 0.6, ease: "easeOut" } },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
  }
};
`;

// Insert variants after TITLES
content = content.replace(/const TITLES = \[([^\]]+)\];/m, `const TITLES = [$1];\n${replacement}`);

// Replace left column motion.divs
content = content.replace(/<motion\.div\s+initial=\{\{\s*opacity:\s*0,\s*x:\s*-200\s*\}\}\s+whileInView=\{\{\s*opacity:\s*1,\s*x:\s*0\s*\}\}\s+viewport=\{\{\s*once:\s*false,\s*margin:\s*"-50px"\s*\}\}\s+transition=\{\{\s*duration:\s*0\.4,\s*delay:\s*0\.([1-7])\s*\}\}/g, 
  (match, p1) => {
    return `<motion.div
            custom={${p1}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "0px" }}
            variants={leftVariants}`;
});

// Replace right column portrait
content = content.replace(/<motion\.div\s+initial=\{\{\s*opacity:\s*0,\s*x:\s*200,\s*scale:\s*0\.9\s*\}\}\s+whileInView=\{\{\s*opacity:\s*1,\s*x:\s*0,\s*scale:\s*1\s*\}\}\s+viewport=\{\{\s*once:\s*false,\s*margin:\s*"-50px"\s*\}\}\s+transition=\{\{\s*duration:\s*1\.5,\s*delay:\s*0\.4,\s*ease:\s*"easeOut"\s*\}\}/m,
  `<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px" }}
          variants={rightVariants}`);

fs.writeFileSync(filePath, content);
console.log('HeroSection variants updated');
