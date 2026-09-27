const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Fix html2canvas call
code = code.replace(
  /const html2canvas = typeof html2canvasModule === 'function' \? html2canvasModule : html2canvasModule\.default;/g,
  `let html2canvas = typeof html2canvasModule === 'function' ? html2canvasModule : html2canvasModule.default; if (!html2canvas && html2canvasModule) html2canvas = html2canvasModule;`
);

// Fix clipboard writeText
code = code.replace(/navigator\.clipboard\.writeText\((.*?)\)/g, 'navigator.clipboard?.writeText?.($1)');

fs.writeFileSync('src/App.tsx', code);
