const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  /const html2canvas = html2canvasModule.default \|\| \(html2canvasModule as any\);/g,
  `const html2canvas = typeof html2canvasModule === 'function' ? html2canvasModule : html2canvasModule.default;`
);

fs.writeFileSync('src/App.tsx', code);
